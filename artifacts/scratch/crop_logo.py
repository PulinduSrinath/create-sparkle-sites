import os
from PIL import Image

image_path = r"C:\Users\Pulindu\AppData\Local\Temp" # Wait, the image path is:
image_path = r"C:\Users\Pulindu\.gemini\antigravity-ide\brain\e40b6368-dbc5-44df-9e61-b7a91870e5c1\media__1783168711808.jpg"
out_dir = r"C:\Users\Pulindu\.gemini\antigravity-ide\brain\e40b6368-dbc5-44df-9e61-b7a91870e5c1\scratch"
public_dir = r"a:\Website\create-sparkle-sites\public"

img = Image.open(image_path)
width, height = img.size
print(f"Image size: {width}x{height}")

# Find bounding box of non-white pixels
# We consider a pixel non-white if any channel is < 240
non_white_pixels = []
for y in range(height):
    for x in range(width):
        r, g, b = img.getpixel((x, y))
        if r < 245 or g < 245 or b < 245:
            non_white_pixels.append((x, y))

if not non_white_pixels:
    print("No content found!")
    exit(1)

xs = [p[0] for p in non_white_pixels]
ys = [p[1] for p in non_white_pixels]

min_x, max_x = min(xs), max(xs)
min_y, max_y = min(ys), max(ys)
print(f"Content bbox: X={min_x}..{max_x}, Y={min_y}..{max_y}")

# The logo icon is at the top of the content.
# Let's plot vertical density of non-white pixels.
density = [0] * height
for x, y in non_white_pixels:
    density[y] += 1

# Let's find local minima in density to detect separation between icon and text.
# Let's look at density from min_y to max_y
for y in range(min_y, max_y, 10):
    chunk = density[y:y+10]
    avg = sum(chunk)/len(chunk) if chunk else 0
    print(f"Y={y:4d}: {avg:.1f}")

# Let's crop the ZB icon.
# The ZB icon is roughly the top portion. Let's find the gap between the ZB icon and "ZetasBuild" text.
# The ZB icon ends around Y=470 in a 1024x1024 image. Let's look at the density:
# The gap will have very low density (or zero density) of non-white pixels.
# Let's find the first row after min_y where density is 0 or very low (say, < 5) for at least 15 consecutive rows.
gap_y = None
consecutive_low = 0
for y in range(min_y + 100, max_y):
    if density[y] < 8:
        consecutive_low += 1
        if consecutive_low >= 15:
            # We found a gap! Let's set gap_y to the middle of this gap.
            gap_y = y - consecutive_low // 2
            break
    else:
        consecutive_low = 0

if gap_y is not None:
    print(f"Detected gap at Y={gap_y}")
else:
    # Fallback to hardcoded crop for ZB icon
    gap_y = 475
    print(f"Gap not detected, using fallback Y={gap_y}")

# Now let's crop the icon (from min_y to gap_y, and centered around the content's X)
icon_img = img.crop((min_x - 10, min_y - 10, max_x + 10, gap_y + 10))
# Wait, let's crop the icon itself with its own X boundaries in that Y range!
icon_pixels = [p for p in non_white_pixels if p[1] < gap_y]
icon_xs = [p[0] for p in icon_pixels]
icon_ys = [p[1] for p in icon_pixels]
icon_min_x, icon_max_x = min(icon_xs), max(icon_xs)
icon_min_y, icon_max_y = min(icon_ys), max(icon_ys)

# Pad by 20px
padding = 20
icon_crop = img.crop((
    max(0, icon_min_x - padding),
    max(0, icon_min_y - padding),
    min(width, icon_max_x + padding),
    min(height, icon_max_y + padding)
))

# Save the cropped icon as premium-logo-icon.png and premium-logo-icon-256.png
icon_crop.save(os.path.join(out_dir, "new-icon.png"))
print("Saved new-icon.png in scratch directory.")

# Save directly to the public folder
icon_crop.save(os.path.join(public_dir, "premium-logo-icon.png"))
# Rescale and save as webp
icon_crop_resized = icon_crop.resize((256, int(256 * icon_crop.height / icon_crop.width)), Image.Resampling.LANCZOS)
icon_crop_resized.save(os.path.join(public_dir, "premium-logo-icon-256.webp"), "WEBP")
icon_crop.save(os.path.join(public_dir, "premium-logo-icon.webp"), "WEBP")
print("Saved new premium-logo-icon files in public folder.")
