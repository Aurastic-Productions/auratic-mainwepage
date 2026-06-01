import os
from PIL import Image

def compress_images(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            ext = file.lower().split(".")[-1]
            if ext in ["jpg", "jpeg", "png"]:
                path = os.path.join(root, file)
                try:
                    original_size = os.path.getsize(path)
                    if original_size < 300 * 1024:
                        continue
                    
                    with Image.open(path) as img:
                        if img.mode in ("RGBA", "P") and ext in ["jpg", "jpeg"]:
                            img = img.convert("RGB")
                            
                        max_dim = 1920
                        if img.width > max_dim or img.height > max_dim:
                            img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
                            
                        if ext == "png":
                            img.save(path, optimize=True)
                        else:
                            img.save(path, "JPEG", quality=75, optimize=True)
                            
                    new_size = os.path.getsize(path)
                    print(f"Compressed {file}: {original_size/1024/1024:.2f}MB -> {new_size/1024/1024:.2f}MB")
                except Exception as e:
                    print(f"Failed to compress {file}: {e}")

if __name__ == "__main__":
    compress_images(r"d:\AURASTIC PRODUCTIONS WEB\AURASTIC PRODUCTIONS WEB\AURASTIC PRODUCTIONS WEB\aurastic\public")

