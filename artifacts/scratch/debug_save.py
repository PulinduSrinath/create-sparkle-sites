import traceback
import os
from PIL import Image

try:
    img_path = r"C:\Users\Pulindu\.gemini\antigravity-ide\brain\e40b6368-dbc5-44df-9e61-b7a91870e5c1\web_engineering_graphic_1783178213859.png"
    img = Image.open(img_path)
    img_rgba = img.convert("RGBA")
    
    # Let's crop and save
    cropped = img_rgba.crop((0, 0, 100, 100))
    cropped.save("test.png", "PNG")
    print("Saved test.png successfully!")
except Exception as e:
    traceback.print_exc()
