import os
from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

input_path = r"public\AU WEBSITE KIT\AU WEBSITE KIT\IMAGES\IMG_9709.HEIC"
output_path = r"public\team\founder.jpg"

os.makedirs(os.path.dirname(output_path), exist_ok=True)

image = Image.open(input_path)
image.convert("RGB").save(output_path, "JPEG", quality=90)
print(f"Successfully converted to {output_path}")
