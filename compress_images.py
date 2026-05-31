import os
from PIL import Image

def compress_image(filepath, max_width=1200):
    try:
        # Check original size
        original_size = os.path.getsize(filepath) / (1024 * 1024)
        
        img = Image.open(filepath)
        
        # Calculate new dimensions keeping aspect ratio
        if img.width > max_width:
            ratio = max_width / float(img.width)
            new_height = int((float(img.height) * float(ratio)))
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        
        # Save compressed image, replacing the original
        img.save(filepath, "JPEG", optimize=True, quality=75)
        
        new_size = os.path.getsize(filepath) / (1024 * 1024)
        print(f"Compressed {filepath}: {original_size:.2f} MB -> {new_size:.2f} MB")
    except Exception as e:
        print(f"Failed to compress {filepath}: {e}")

compress_image("public/custom/story-atmosphere.jpg")
compress_image("public/custom/story-stage.jpg")
