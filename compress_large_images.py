import os
from pathlib import Path
from PIL import Image
import pillow_heif

pillow_heif.register_heif_opener()

PUBLIC_DIR = Path("d:/AURASTIC PRODUCTIONS WEB/AURASTIC PRODUCTIONS WEB/AURASTIC PRODUCTIONS WEB/aurastic/public")

def compress_images():
    count = 0
    for root, dirs, files in os.walk(PUBLIC_DIR):
        for file in files:
            file_path = Path(root) / file
            
            # Skip videos and other non-images
            if file_path.suffix.lower() not in ['.jpg', '.jpeg', '.png', '.heic', '.webp']:
                continue
                
            # If > 1 MB, let's optimize it
            size_mb = file_path.stat().st_size / (1024 * 1024)
            if size_mb > 1.0:
                print(f"Compressing {file_path.name} ({size_mb:.2f} MB)...")
                try:
                    img = Image.open(file_path)
                    
                    # Convert HEIC/RGBA to RGB
                    if img.mode in ('RGBA', 'P') or file_path.suffix.lower() == '.heic':
                        img = img.convert('RGB')
                    
                    # Resize if very large (max 2000px on longest side)
                    max_size = 2000
                    if max(img.size) > max_size:
                        img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
                    
                    # Overwrite the original file with optimized JPG or WebP
                    if file_path.suffix.lower() == '.png':
                        # Convert to WebP for better compression
                        new_path = file_path.with_suffix('.webp')
                        img.save(new_path, "WEBP", quality=80)
                        # Remove old PNG to force Next.js to use WebP (or we keep the PNG and overwrite? 
                        # actually better to just overwrite as JPG if it's already referenced as PNG in code. 
                        # Wait, if we change extension, we must update code. 
                        # Let's keep the original extension but compress if possible, or convert to JPG and rename to PNG extension? 
                        # No, saving as JPEG but keeping .png extension is bad.
                        # Let's save as optimized PNG. 
                        img.save(file_path, optimize=True, quality=80) 
                        # Note: Pillow PNG optimize is slow and doesn't reduce size much.
                        # Better: save as WebP with the .png extension (Next.js will serve it with correct mime if it reads it? No, next/image handles it).
                    else:
                        img.save(file_path, "JPEG", optimize=True, quality=80)
                        
                    print(f"  -> Done! New size: {file_path.stat().st_size / (1024 * 1024):.2f} MB")
                    count += 1
                except Exception as e:
                    print(f"  -> Failed: {e}")

    print(f"Compressed {count} images.")

if __name__ == '__main__':
    compress_images()
