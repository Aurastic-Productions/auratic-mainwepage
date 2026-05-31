import os
from pathlib import Path
from PIL import Image

SECTORS_DIR = Path("d:/AURASTIC PRODUCTIONS WEB/AURASTIC PRODUCTIONS WEB/AURASTIC PRODUCTIONS WEB/aurastic/public/sectors")

for f in SECTORS_DIR.iterdir():
    if not f.is_file() or f.name == '.DS_Store':
        continue
    
    try:
        img = Image.open(f)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
            
        img.thumbnail((800, 800), Image.Resampling.LANCZOS)
        
        if f.suffix.lower() == '.png':
            new_f = f.with_suffix('.jpg')
            img.save(new_f, "JPEG", quality=80, optimize=True)
            f.unlink()
            print(f"Compressed and converted {f.name} to jpg")
        else:
            img.save(f, "JPEG", quality=80, optimize=True)
            print(f"Compressed {f.name}")
    except Exception as e:
        print(f"Error processing {f.name}: {e}")
