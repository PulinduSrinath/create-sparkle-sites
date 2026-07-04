import os
from PIL import Image

image_path = r"C:\Users\Pulindu\.gemini\antigravity-ide\brain\e40b6368-dbc5-44df-9e61-b7a91870e5c1\media__1783168711808.jpg"
public_dir = r"a:\Website\create-sparkle-sites\public"

img = Image.open(image_path)
width, height = img.size
print(f"Image size: {width}x{height}")

# Find bounding box of non-white content
non_white_pixels = []
for y in range(height):
    for x in range(width):
        r, g, b = img.getpixel((x, y))
        if r < 248 or g < 248 or b < 248:
            non_white_pixels.append((x, y))

xs = [p[0] for p in non_white_pixels]
ys = [p[1] for p in non_white_pixels]
min_x, max_x = min(xs), max(xs)
min_y, max_y = min(ys), max(ys)

# Icon gap is around y=473 from previous run
gap_y = 473

# Find icon specific bounding box
icon_pixels = [p for p in non_white_pixels if p[1] < gap_y]
icon_xs = [p[0] for p in icon_pixels]
icon_ys = [p[1] for p in icon_pixels]
icon_min_x, icon_max_x = min(icon_xs), max(icon_xs)
icon_min_y, icon_max_y = min(icon_ys), max(icon_ys)

# Crop the icon with some padding
padding = 15
icon_crop = img.crop((
    max(0, icon_min_x - padding),
    max(0, icon_min_y - padding),
    min(width, icon_max_x + padding),
    min(height, icon_max_y + padding)
))

# Convert to RGBA to make the background transparent
icon_rgba = icon_crop.convert("RGBA")
idata = icon_rgba.getdata()

newData = []
# We will make white background transparent.
# To make edges smooth, we will calculate the alpha channel based on how close the pixel is to white.
for item in idata:
    r, g, b, a = item
    # If it is very close to white, we make it transparent or semi-transparent
    # Let's use a threshold: if all channels are > 240
    # We will interpolate alpha between 220 and 250
    min_c = min(r, g, b)
    if min_c >= 250:
        newData.append((r, g, b, 0))
    elif min_c > 220:
        # Fading alpha smoothly
        alpha = int(255 * (250 - min_c) / 30)
        # Smoothly blend the pixel color towards the background color or keep it
        newData.append((r, g, b, alpha))
    else:
        newData.append((r, g, b, 255))

icon_rgba.putdata(newData)

# Save as premium-logo-icon.png with transparency (high resolution!)
icon_rgba.save(os.path.join(public_dir, "premium-logo-icon.png"), "PNG")
icon_rgba.save(os.path.join(public_dir, "premium-logo-icon.webp"), "WEBP", quality=95)

# Save 256x256 version
icon_256 = icon_rgba.resize((256, int(256 * icon_rgba.height / icon_rgba.width)), Image.Resampling.LANCZOS)
icon_256.save(os.path.join(public_dir, "premium-logo-icon-256.webp"), "WEBP", quality=90)

print("Saved high quality transparent premium-logo-icon files!")
