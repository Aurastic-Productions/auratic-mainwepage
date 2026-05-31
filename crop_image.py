import os
from PIL import Image

input_path = r"public\team\founder.jpg"
output_path = r"public\team\founder_cropped.jpg"

try:
    image = Image.open(input_path)
    width, height = image.size
    
    # We want to crop the bottom part where the wires and the table are.
    # Let's crop out the bottom 20% of the image.
    crop_height = int(height * 0.82) 
    
    # Define the bounding box: (left, upper, right, lower)
    # This keeps the full width, starts from the top, and ends at crop_height.
    cropped_image = image.crop((0, 0, width, crop_height))
    
    cropped_image.save(output_path, "JPEG", quality=95)
    print(f"Successfully cropped! Original size: {width}x{height}, New size: {width}x{crop_height}")
except Exception as e:
    print(f"Error: {e}")
