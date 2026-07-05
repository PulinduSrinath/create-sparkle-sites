import traceback
import os
from PIL import Image, ImageFilter

try:
    img_path = r"C:\Users\Pulindu\.gemini\antigravity-ide\brain\e40b6368-dbc5-44df-9e61-b7a91870e5c1\web_engineering_graphic_1783178213859.png"
    img = Image.open(img_path)
    width, height = img.size
    
    img_rgba = img.convert("RGBA")
    pixels = img_rgba.load()
    ref_r, ref_g, ref_b, ref_a = img_rgba.getpixel((0, 0))
    
    visited = set()
    background = set()
    seeds = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]
    queue = list(seeds)
    for s in seeds:
        visited.add(s)
        
    threshold = 40.0
    while queue:
        cx, cy = queue.pop(0)
        r, g, b, a = pixels[cx, cy]
        dist = ((r - ref_r)**2 + (g - ref_g)**2 + (b - ref_b)**2)**0.5
        if dist < threshold:
            background.add((cx, cy))
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))
                        
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
        
    print("Logo bounds:", min_x, max_x, min_y, max_y)
    
    mask = Image.new("L", (width, height), 255)
    mask_pixels = mask.load()
    for x, y in background:
        mask_pixels[x, y] = 0
        
    mask_blurred = mask.filter(ImageFilter.GaussianBlur(1.0))
    img_rgba.putalpha(mask_blurred)
    
    padding = 20
    cropped = img_rgba.crop((
        max(0, min_x - padding),
        max(0, min_y - padding),
        min(width, max_x + padding),
        min(height, max_y + padding)
    ))
    
    print("Cropped size:", cropped.size)
    cropped.save("test_out.png", "PNG")
    print("Saved test_out.png successfully!")
    
except Exception as e:
    traceback.print_exc()
