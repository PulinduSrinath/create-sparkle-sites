import os
from PIL import Image

image_path = r"C:\Users\Pulindu\.gemini\antigravity-ide\brain\e40b6368-dbc5-44df-9e61-b7a91870e5c1\media__1783171882207.png"
public_dir = r"a:\Website\create-sparkle-sites\public"

img = Image.open(image_path)
width, height = img.size
print(f"Image size: {width}x{height}")

# Find bounding box of non-white content
non_white_pixels = []
for y in range(height):
    for x in range(width):
        r, g, b = img.getpixel((x, y))[:3]
        if r < 248 or g < 248 or b < 248:
            non_white_pixels.append((x, y))

xs = [p[0] for p in non_white_pixels]
ys = [p[1] for p in non_white_pixels]
min_x, max_x = min(xs), max(xs)
min_y, max_y = min(ys), max(ys)

# Crop the logo with some padding
padding = 15
logo_crop = img.crop((
    max(0, min_x - padding),
    max(0, min_y - padding),
    min(width, max_x + padding),
    min(height, max_y + padding)
))

# Convert to RGBA to make the background transparent
logo_rgba = logo_crop.convert("RGBA")
# Get clean data (strip alpha if original had it, or use custom alpha)
idata = list(logo_rgba.getdata())

newData = []
# Make white background transparent
for item in idata:
    r, g, b, a = item
    min_c = min(r, g, b)
    if min_c >= 250:
        newData.append((r, g, b, 0))
    elif min_c > 220:
        # Fading alpha smoothly
        alpha = int(255 * (250 - min_c) / 30)
        newData.append((r, g, b, alpha))
    else:
        newData.append((r, g, b, 255))

logo_rgba.putdata(newData)

# Save as public logo files
logo_rgba.save(os.path.join(public_dir, "premium-logo-icon.png"), "PNG")
logo_rgba.save(os.path.join(public_dir, "premium-logo-icon.webp"), "WEBP", quality=95)

# Save 256x256 version
logo_256 = logo_rgba.resize((256, int(256 * logo_rgba.height / logo_rgba.width)), Image.Resampling.LANCZOS)
logo_256.save(os.path.join(public_dir, "premium-logo-icon-256.webp"), "WEBP", quality=90)

print("Successfully updated with high resolution transparent logo!")
