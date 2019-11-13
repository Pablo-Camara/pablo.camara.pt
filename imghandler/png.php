<?php
$testGD = get_extension_funcs("gd"); // Grab function list 
if (!$testGD){ echo "GD not even installed."; exit; }


// The file
$filename = $_GET['url'];

// Set a maximum height and width
$width = $_GET['max-width'];
$height = $_GET['max-height'];

// Content type
header('Content-Type: image/png');

// Get new dimensions
list($width_orig, $height_orig) = getimagesize($filename);

$ratio_orig = $width_orig/$height_orig;

if ($width/$height > $ratio_orig) {
   $width = $height*$ratio_orig;
} else {
   $height = $width/$ratio_orig;
}

// Resample
$image_p = imagecreatetruecolor($width, $height);
imagealphablending($image_p,false);
imagesavealpha($image_p,true);
$image = imagecreatefrompng($filename);
imagecopyresampled($image_p, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);

// Output
imagepng($image_p, null, 0);
