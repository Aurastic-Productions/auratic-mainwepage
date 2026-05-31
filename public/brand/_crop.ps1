Add-Type -AssemblyName System.Drawing
$inPath = (Resolve-Path "$PSScriptRoot\aurastic-mark.png").Path
$outPath = "$PSScriptRoot\aurastic-mark-square.png"

$src = [System.Drawing.Bitmap]::FromFile($inPath)
$w = $src.Width
$h = $src.Height
Write-Output "Source: ${w} x ${h}"

# Lock pixels for fast scan
$rect = New-Object System.Drawing.Rectangle 0, 0, $w, $h
$data = $src.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$stride = $data.Stride
$bytes = New-Object byte[] ($stride * $h)
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)
$src.UnlockBits($data)

# Find bbox of *strongly* opaque pixels only (alpha > 200) — ignores faint wordmark outline
$minX = $w; $minY = $h; $maxX = 0; $maxY = 0
for ($y = 0; $y -lt $h; $y++) {
  $row = $y * $stride
  for ($x = 0; $x -lt $w; $x++) {
    $a = $bytes[$row + $x * 4 + 3]
    if ($a -gt 200) {
      if ($x -lt $minX) { $minX = $x }
      if ($y -lt $minY) { $minY = $y }
      if ($x -gt $maxX) { $maxX = $x }
      if ($y -gt $maxY) { $maxY = $y }
    }
  }
}

Write-Output "Strong-alpha BBox: ($minX,$minY) -> ($maxX,$maxY)"

# Restrict horizontally to a window starting at minX with width = bbox height (the diamond is roughly square)
$bboxH = $maxY - $minY + 1
# Diamond ends before the wordmark — find the gap (column with no opaque pixels) right of $minX
$diamondMaxX = $maxX
$gapStart = -1
$searchFromX = $minX + [int]($bboxH * 0.9)  # past the bulk of the diamond
$searchToX = [Math]::Min($maxX, $minX + [int]($bboxH * 1.6))
for ($x = $searchFromX; $x -le $searchToX; $x++) {
  $hasPixel = $false
  for ($y = 0; $y -lt $h; $y++) {
    $a = $bytes[$y * $stride + $x * 4 + 3]
    if ($a -gt 200) { $hasPixel = $true; break }
  }
  if (-not $hasPixel) {
    if ($gapStart -lt 0) { $gapStart = $x }
    if ($x - $gapStart -gt 30) { $diamondMaxX = $gapStart - 1; break }
  } else {
    $gapStart = -1
  }
}
Write-Output "Diamond cutoff X = $diamondMaxX"

# Re-scan within that horizontal window for tightest bounds
$dMinX = $w; $dMinY = $h; $dMaxX = 0; $dMaxY = 0
for ($y = 0; $y -lt $h; $y++) {
  $row = $y * $stride
  for ($x = $minX; $x -le $diamondMaxX; $x++) {
    $a = $bytes[$row + $x * 4 + 3]
    if ($a -gt 200) {
      if ($x -lt $dMinX) { $dMinX = $x }
      if ($y -lt $dMinY) { $dMinY = $y }
      if ($x -gt $dMaxX) { $dMaxX = $x }
      if ($y -gt $dMaxY) { $dMaxY = $y }
    }
  }
}

Write-Output "Diamond BBox: ($dMinX,$dMinY) -> ($dMaxX,$dMaxY)"
$cw = $dMaxX - $dMinX + 1
$ch = $dMaxY - $dMinY + 1

# Make square — pad shorter side; add small breathing room
$pad = [int]([Math]::Max($cw, $ch) * 0.06)
$side = [Math]::Max($cw, $ch) + 2 * $pad
$padX = [int](($side - $cw) / 2)
$padY = [int](($side - $ch) / 2)

$dst = New-Object System.Drawing.Bitmap $side, $side, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($dst)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.Clear([System.Drawing.Color]::Transparent)
$srcRect = New-Object System.Drawing.Rectangle $dMinX, $dMinY, $cw, $ch
$dstRect = New-Object System.Drawing.Rectangle $padX, $padY, $cw, $ch
$g.DrawImage($src, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$dst.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$dst.Dispose()
$src.Dispose()
Write-Output "Wrote ${side} x ${side} -> $outPath"
