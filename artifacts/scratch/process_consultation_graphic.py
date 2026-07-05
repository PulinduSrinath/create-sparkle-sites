import os
from PIL import Image, ImageFilter

brain_dir = r"C:\Users\Pulindu\.gemini\antigravity-ide\brain\e40b6368-dbc5-44df-9e61-b7a91870e5c1"
dest_dir = r"a:\Website\create-sparkle-sites\public"
os.makedirs(dest_dir, exist_ok=True)

src_name = "consultation_graphic_1783180034439.png"
dest_name = "contact-consultation"

img_path = os.path.join(brain_dir, src_name)
if not os.path.exists(img_path):
    print(f"File not found: {img_path}")
    exit(1)
    
img = Image.open(img_path)
width, height = img.size
print(f"Processing {src_name} ({width}x{height})...")

# Convert to RGBA
img_rgba = img.convert("RGBA")
img_rgba.info.pop("transparency", None)
pixels = img_rgba.load()

# Get reference corner color
ref_r, ref_g, ref_b, ref_a = img_rgba.getpixel((0, 0))
print(f"Corner reference color: ({ref_r}, {ref_g}, {ref_b})")

# Flood-fill BFS to isolate background
visited = set()
background = set()
seeds = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]
queue = list(seeds)
for s in seeds:
    visited.add(s)
    
threshold = 40.0

while queue:
    cx, cy = queue.pop(0)
    pixel_r, pixel_g, pixel_b, pixel_a = pixels[cx, cy]
    dist = ((pixel_r - ref_r)**2 + (pixel_g - ref_g)**2 + (pixel_b - ref_b)**2)**0.5
    if dist < threshold:
        background.add((cx, cy))
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < width and 0 <= ny < height:
                if (nx, ny) not in visited:
                    visited.add((nx, ny))
                    queue.append((nx, ny))
                    
# Find bounding box of logo/graphic (pixels NOT in background)
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
else:
    min_x, max_x = 0, width - 1
    min_y, max_y = 0, height - 1
    
# Create transparency mask
mask = Image.new("L", (width, height), 255)
mask_pixels = mask.load()
for x, y in background:
    mask_pixels[x, y] = 0
    
# Blur mask for smooth edge blending
mask_blurred = mask.filter(ImageFilter.GaussianBlur(1.0))
img_rgba.putalpha(mask_blurred)

# Crop to bounds with padding
padding = 20
cropped = img_rgba.crop((
    max(0, min_x - padding),
    max(0, min_y - padding),
    min(width, max_x + padding),
    min(height, max_y + padding)
))

cropped.info.pop("transparency", None)

# Save
cropped.save(os.path.join(dest_dir, dest_name + ".png"), "PNG")
cropped.save(os.path.join(dest_dir, dest_name + ".webp"), "WEBP", quality=95)
print(f"Saved transparent consultation graphic to {dest_name}.webp successfully!")
