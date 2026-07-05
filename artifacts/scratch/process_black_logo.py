import os
from PIL import Image, ImageFilter

image_path = r"C:\Users\Pulindu\.gemini\antigravity-ide\brain\e40b6368-dbc5-44df-9e61-b7a91870e5c1\media__1783172230044.png"
public_dir = r"a:\Website\create-sparkle-sites\public"

img = Image.open(image_path)
width, height = img.size
print(f"Image size: {width}x{height}")

# Convert to RGBA
img_rgba = img.convert("RGBA")
pixels = img_rgba.load()

# Bounding box of non-black pixels (rough detection)
non_black = []
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if r > 10 or g > 10 or b > 10:
            non_black.append((x, y))

xs = [p[0] for p in non_black]
ys = [p[1] for p in non_black]
min_x, max_x = min(xs), max(xs)
min_y, max_y = min(ys), max(ys)
print(f"Non-black bounds: x={min_x}..{max_x}, y={min_y}..{max_y}")

# Flood-fill from corners to find the background
# We'll use a queue-based BFS
visited = set()
background = set()

# Corner seeds
seeds = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]
queue = list(seeds)
for s in seeds:
    visited.add(s)

# Threshold for being "black background"
# Background is solid black (0,0,0)
threshold = 30

while queue:
    curr_x, curr_y = queue.pop(0)
    r, g, b, a = pixels[curr_x, curr_y]
    
    # Check if color is close to black
    if r < threshold and g < threshold and b < threshold:
        background.add((curr_x, curr_y))
        
        # Add neighbors
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = curr_x + dx, curr_y + dy
            if 0 <= nx < width and 0 <= ny < height:
                if (nx, ny) not in visited:
                    visited.add((nx, ny))
                    queue.append((nx, ny))

# Now create a mask for alpha channel
# Logo pixels are 255, background is 0
mask = Image.new("L", (width, height), 255)
mask_pixels = mask.load()
for x, y in background:
    mask_pixels[x, y] = 0

# Smooth the mask to anti-alias the edges
# We can apply a small blur to the mask
mask_blurred = mask.filter(ImageFilter.GaussianBlur(1.0))

# Apply the mask to the image
img_rgba.putalpha(mask_blurred)

# Crop to logo bounds with padding
padding = 15
cropped = img_rgba.crop((
    max(0, min_x - padding),
    max(0, min_y - padding),
    min(width, max_x + padding),
    min(height, max_y + padding)
))

# Save the cropped logo files
cropped.save(os.path.join(public_dir, "premium-logo-icon.png"), "PNG")
cropped.save(os.path.join(public_dir, "premium-logo-icon.webp"), "WEBP", quality=95)

# Save 256x256 version
cropped_256 = cropped.resize((256, int(256 * cropped.height / cropped.width)), Image.Resampling.LANCZOS)
cropped_256.save(os.path.join(public_dir, "premium-logo-icon-256.webp"), "WEBP", quality=90)

print("Saved high resolution transparent logo cropped from black background!")
