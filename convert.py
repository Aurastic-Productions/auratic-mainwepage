import os
import shutil
from pathlib import Path
from PIL import Image
import pillow_heif

# Register HEIF opener
pillow_heif.register_heif_opener()

SOURCE_DIR = Path("d:/AURASTIC PRODUCTIONS WEB/AURASTIC PRODUCTIONS WEB/AURASTIC PRODUCTIONS WEB/aurastic/public/AU WEBSITE KIT/AU WEBSITE KIT/IMAGES")
DEST_SECTORS = Path("d:/AURASTIC PRODUCTIONS WEB/AURASTIC PRODUCTIONS WEB/AURASTIC PRODUCTIONS WEB/aurastic/public/sectors")
DEST_CUSTOM = Path("d:/AURASTIC PRODUCTIONS WEB/AURASTIC PRODUCTIONS WEB/AURASTIC PRODUCTIONS WEB/aurastic/public/custom")
DEST_GALLERY = Path("d:/AURASTIC PRODUCTIONS WEB/AURASTIC PRODUCTIONS WEB/AURASTIC PRODUCTIONS WEB/aurastic/public/gallery")

# Ensure dirs exist
DEST_SECTORS.mkdir(parents=True, exist_ok=True)
DEST_CUSTOM.mkdir(parents=True, exist_ok=True)
DEST_GALLERY.mkdir(parents=True, exist_ok=True)

def process_file(src_path, dest_path):
    if src_path.suffix.lower() == '.heic':
        # Convert to jpg
        img = Image.open(src_path)
        img = img.convert("RGB")
        dest_jpg = dest_path.with_suffix('.jpg')
        img.save(dest_jpg, "JPEG")
        print(f"Converted and saved: {dest_jpg}")
        return dest_jpg
    else:
        # Copy file
        shutil.copy2(src_path, dest_path)
        print(f"Copied: {dest_path}")
        return dest_path

# Mapping for sectors
sectors_map = {
    'audio.jpg': 'audio.jpg',
    'lighting.jpg': 'lighting.jpg',
    'Visuals.jpg': 'visuals.jpg',
    'structure.png': 'structure.png',
    'sfx.JPG': 'sfx.jpg',
    'talent.JPG': 'talent.jpg',
    'power.jpg': 'power.jpg',
    'aesthetics.HEIC': 'aesthetics.jpg', # will be converted
    'media.heic': 'media.jpg', # will be converted
    'operatins.png': 'operations.png',
    'compliance.jpg': 'compliance.jpg',
    'Direction.jpg': 'direction.jpg'
}

about_map = {
    'atmoshperer.jpg': 'story-atmosphere.jpg',
    'onstage.JPG': 'story-stage.jpg'
}

processed_names = set(sectors_map.keys()).union(set(about_map.keys()))

if SOURCE_DIR.exists():
    for f in SOURCE_DIR.iterdir():
        if not f.is_file() or f.name == '.DS_Store':
            continue
        
        name = f.name
        
        if name in sectors_map:
            # It's a sector image
            dest_name = sectors_map[name]
            process_file(f, DEST_SECTORS / dest_name)
        elif name in about_map:
            # It's an about image
            dest_name = about_map[name]
            process_file(f, DEST_CUSTOM / dest_name)
        else:
            # It's a gallery image
            process_file(f, DEST_GALLERY / f.name)
            
print("Done processing images.")
