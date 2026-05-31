import imageio_ffmpeg
import subprocess
import os

ffmpeg_path = imageio_ffmpeg.get_ffmpeg_exe()
input_file = "public/videos/AU_INTRO.mp4"
output_file = "public/videos/AU_INTRO_COMPRESSED.mp4"

if os.path.exists(output_file):
    os.remove(output_file)

cmd = [
    ffmpeg_path,
    "-i", input_file,
    "-vcodec", "libx264",
    "-crf", "26",
    "-preset", "fast",
    "-acodec", "aac",
    "-b:a", "128k",
    "-movflags", "+faststart",
    "-pix_fmt", "yuv420p",
    "-profile:v", "main",
    output_file,
    "-y"
]

print("Starting video compression (this might take a minute)...")
result = subprocess.run(cmd, capture_output=True, text=True)
if result.returncode == 0:
    print(f"Success! Compressed video saved to {output_file}")
    old_size = os.path.getsize(input_file) / (1024 * 1024)
    new_size = os.path.getsize(output_file) / (1024 * 1024)
    print(f"Original size: {old_size:.2f} MB")
    print(f"New size: {new_size:.2f} MB")
else:
    print("Error compressing video:")
    print(result.stderr)
