import os
from PIL import Image

image_path = r"C:\Users\Pulindu\.gemini\antigravity-ide\brain\e40b6368-dbc5-44df-9e61-b7a91870e5c1\media__1783171882207.png"
public_dir = r"a:\Website\create-sparkle-sites\public"

img = Image.open(image_path)
width, height = img.size
print(f"Image size: {width}x{height}, Mode: {img.mode}")

# Find bounding box of pixels with alpha > 0
non_transparent = []
pixels = img.load()
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if a > 0:
            non_transparent.append((x, y))

if not non_transparent:
    print("Error: No visible pixels found!")
    exit(1)

xs = [p[0] for p in non_transparent]
ys = [p[1] for p in non_transparent]
min_x, max_x = min(xs), max(xs)
min_y, max_y = min(ys), max(ys)
print(f"Visible logo bounds: x={min_x}..{max_x}, y={min_y}..{max_y}")

# Crop the logo with padding
padding = 15
cropped = img.crop((
    max(0, min_x - padding),
    max(0, min_y - padding),
    min(width, max_x + padding),
    min(height, max_y + padding)
))

# Save the cropped logo directly (preserving the original transparent alpha channel!)
cropped.save(os.path.join(public_dir, "premium-logo-icon.png"), "PNG")
cropped.save(os.path.join(public_dir, "premium-logo-icon.webp"), "WEBP", quality=95)

# Save 256x256 version
cropped_256 = cropped.resize((256, int(256 * cropped.height / cropped.width)), Image.Resampling.LANCZOS)
cropped_256.save(os.path.join(public_dir, "premium-logo-icon-256.webp"), "WEBP", quality=90)

print("Successfully cropped and saved the high resolution transparent logo!")
