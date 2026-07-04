import os
from PIL import Image

image_path = r"C:\Users\Pulindu\.gemini\antigravity-ide\brain\e40b6368-dbc5-44df-9e61-b7a91870e5c1\media__1783171882207.png"
public_dir = r"a:\Website\create-sparkle-sites\public"

img = Image.open(image_path)
width, height = img.size

# Find bounding box of pixels with alpha > 0
non_transparent = []
pixels = img.load()
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if a > 0:
            non_transparent.append((x, y))

xs = [p[0] for p in non_transparent]
ys = [p[1] for p in non_transparent]
min_x, max_x = min(xs), max(xs)
min_y, max_y = min(ys), max(ys)

padding = 15
cropped = img.crop((
    max(0, min_x - padding),
    max(0, min_y - padding),
    min(width, max_x + padding),
    min(height, max_y + padding)
))

# Save with a brand new filename to completely bust browser caches!
cropped.save(os.path.join(public_dir, "logo-rebranded.png"), "PNG")
cropped.save(os.path.join(public_dir, "logo-rebranded.webp"), "WEBP", quality=95)

# Save 256x256 version
cropped_256 = cropped.resize((256, int(256 * cropped.height / cropped.width)), Image.Resampling.LANCZOS)
cropped_256.save(os.path.join(public_dir, "logo-rebranded-256.webp"), "WEBP", quality=90)

print("Saved new cache-busted logo files successfully!")
