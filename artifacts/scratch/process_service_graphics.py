import os
from PIL import Image, ImageFilter

brain_dir = r"C:\Users\Pulindu\.gemini\antigravity-ide\brain\e40b6368-dbc5-44df-9e61-b7a91870e5c1"
services_dir = r"a:\Website\create-sparkle-sites\public\services"
os.makedirs(services_dir, exist_ok=True)

graphics = [
    {"src": "web_engineering_graphic_1783178213859.png", "dest": "web-engineering"},
    {"src": "mobile_force_graphic_1783178228593.png", "dest": "mobile-force"},
    {"src": "creative_mastery_graphic_1783178240548.png", "dest": "creative-mastery"},
    {"src": "security_support_graphic_1783178252207.png", "dest": "security-support"},
    {"src": "ai_machine_graphic_1783178266076.png", "dest": "ai-machine"}
]

for g in graphics:
    img_path = os.path.join(brain_dir, g["src"])
    if not os.path.exists(img_path):
        print(f"File not found: {img_path}")
        continue
        
    img = Image.open(img_path)
    width, height = img.size
    print(f"Processing {g['src']} ({width}x{height})...")
    
    # Convert to RGBA first!
    img_rgba = img.convert("RGBA")
    
    # CRITICAL: PIL bug fix. Pop the transparency key from info if it exists
    img_rgba.info.pop("transparency", None)
    
    pixels = img_rgba.load()
    
    # Get reference corner color from the RGBA image
    ref_r, ref_g, ref_b, ref_a = img_rgba.getpixel((0, 0))
    print(f"Corner reference color: ({ref_r}, {ref_g}, {ref_b})")
    
    # Flood-fill BFS to isolate background
    visited = set()
    background = set()
    seeds = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]
    queue = list(seeds)
    for s in seeds:
        visited.add(s)
        
    # Distance threshold to group background
    threshold = 40.0
    
    while queue:
        cx, cy = queue.pop(0)
        # Use pixel_r, pixel_g, pixel_b, pixel_a to avoid shadowing the loop variable 'g'!
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
    
    # CRITICAL: also pop from cropped info!
    cropped.info.pop("transparency", None)
    
    # Save as PNG and WEBP
    cropped.save(os.path.join(services_dir, g["dest"] + ".png"), "PNG")
    cropped.save(os.path.join(services_dir, g["dest"] + ".webp"), "WEBP", quality=95)
    print(f"Saved transparent service graphic: {g['dest']}.webp")

print("All service graphics processed successfully!")
