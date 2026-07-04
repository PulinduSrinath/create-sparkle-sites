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

# Get the background color of the top-left corner
ref_r, ref_g, ref_b = img.getpixel((0, 0))[:3]
print(f"Background reference color from corner: ({ref_r}, {ref_g}, {ref_b})")

# Flood-fill from corners to find the background
visited = set()
background = set()

# Corner seeds
seeds = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]
queue = list(seeds)
for s in seeds:
    visited.add(s)

# Distance threshold (Euclidean distance in RGB space)
threshold = 40.0

while queue:
    curr_x, curr_y = queue.pop(0)
    r, g, b, a = pixels[curr_x, curr_y]
    
    # Calculate distance to reference color
    dist = ((r - ref_r) ** 2 + (g - ref_g) ** 2 + (b - ref_b) ** 2) ** 0.5
    
    if dist < threshold:
        background.add((curr_x, curr_y))
        
        # Add neighbors
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = curr_x + dx, curr_y + dy
            if 0 <= nx < width and 0 <= ny < height:
                if (nx, ny) not in visited:
                    visited.add((nx, ny))
                    queue.append((nx, ny))

print(f"Total background pixels found: {len(background)}")

# Bounding box of logo (all pixels NOT in background)
logo_xs = []
logo_ys = []
for y in range(height):
    for x in range(width):
        if (x, y) not in background:
            logo_xs.append(x)
            logo_ys.append(y)

if logo_xs and logo_ys:
    min_x, max_x = min(logo_xs), max(logo_xs)
    min_y, max_y = min(logo_ys), max(logo_ys)
    print(f"Logo bounds: x={min_x}..{max_x}, y={min_y}..{max_y}")
else:
    min_x, max_x = 0, width - 1
    min_y, max_y = 0, height - 1
    print("Warning: Logo pixels not found, using full image size.")

# Create the mask
mask = Image.new("L", (width, height), 255)
mask_pixels = mask.load()
for x, y in background:
    mask_pixels[x, y] = 0

# Smooth the mask to anti-alias the edges
mask_blurred = mask.filter(ImageFilter.GaussianBlur(1.0))

# Apply mask to alpha channel
img_rgba.putalpha(mask_blurred)

# Crop the logo with padding
padding = 15
cropped = img_rgba.crop((
    max(0, min_x - padding),
    max(0, min_y - padding),
    min(width, max_x + padding),
    min(height, max_y + padding)
))

# Save logo files
cropped.save(os.path.join(public_dir, "premium-logo-icon.png"), "PNG")
cropped.save(os.path.join(public_dir, "premium-logo-icon.webp"), "WEBP", quality=95)

# Save 256x256 version
cropped_256 = cropped.resize((256, int(256 * cropped.height / cropped.width)), Image.Resampling.LANCZOS)
cropped_256.save(os.path.join(public_dir, "premium-logo-icon-256.webp"), "WEBP", quality=90)

print("Saved high-res logo with proper background transparency!")
