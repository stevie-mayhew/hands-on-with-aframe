<?php

header('Content-Type: text/plain;');

echo '<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="favicon.ico">
	<script src="/production/js/main.js"></script>
	<title>Hands on with A-Frame</title>
</head>
<body>
<a-scene>
	<a-sky src="#sky"></a-sky>
	<a-entity id="camera"
			  camera
			  gamepad-controls
			  position="0 3.8 0"
			  rotation="270 270 90"></a-entity>';

$files = glob('images/*.png');
natsort($files);

$sortedFiles = [];

echo '
	<a-assets>
		<img id="stevie" src="/images/examples/stevie.png" />
		<img id="sky" src="/images/examples/sky-one.jpg" />
		<a-asset-item id="tree1" src="/images/examples/tree1.dae"></a-asset-item>
		<a-asset-item id="tree2" src="/images/examples/tree2.dae"></a-asset-item>
		<a-asset-item id="crate-mtl" src="/images/examples/crate.mtl"></a-asset-item>
		<a-asset-item id="crate-obj" src="/images/examples/crate.obj"></a-asset-item>
		<a-asset-item id="brainstem" src="https://cdn.aframe.io/test-models/models/brainstem/BrainStem.gltf"></a-asset-item>
';
foreach ($files as $number => $filename) {

    $filename = '/' . $filename;
    $parts = preg_split('|/+|', $filename);
    $filename = array_pop($parts);

    if(preg_match('/^(.*)\.([A-Za-z][A-Za-z0-9]*)$/', $filename, $matches)) {
        $filename = $matches[1];
    }
    $sortedFiles[] = $filename;

    echo '		<img id="slide-'.$filename.'" src="/'.$files[$number].'">
';

}

echo '        </a-assets>';

$realNumber = 0;
$cameraHeight = 0;
$boxDepth = 0;
$boxYPosition = 0;
$boxZPosition = 0;

foreach ($sortedFiles as $number => $filename) {

    $realNumber = $number + 1;
    if ($realNumber=== count($sortedFiles)) {
        echo '
	<a-entity class="slide" id="slide-'. $realNumber .'" data-cameraposition="0 '. $cameraHeight .' '. $boxZPosition .'" data-camerarotation="-10 0 0">
		<a-image id="finalslide" src="#slide-'.$filename.'"
				 width="500"
				 height="250"
				 position="0 -1150 0"
				 rotation="0 0 0"></a-image>
	</a-entity>';
    } else if ($realNumber == 69) {


        $cameraHeight = $number + 3.8;
        $boxDepth = ($number + 1);
        $imageHeight = ($number + 1.01);
        $boxYPosition = ($number + 1) * 0.5;
        $boxZPosition = $number * 5;

        echo '
	<a-entity class="slide" id="slide-'. $realNumber .'" data-cameraposition="0 '. $cameraHeight .' '. $boxZPosition .'" data-camerarotation="0 90 0">
		<a-box
		    static-body
			width="10"
			height="5"
			depth="'. $boxDepth .'"
			position="0 '. $boxYPosition .' '.$boxZPosition. '"
			rotation="270 270 90"></a-box>

		<a-image src="#slide-'.$filename.'"
				 width="10"
				 height="5"
				 position="0 '. $imageHeight .' ' .$boxZPosition .'"
				 rotation="270 270 90"></a-image>
	</a-entity>';

    } else {

        $cameraHeight = $number + 3.8;
        $boxDepth = ($number + 1);
        $boxYPosition = ($number + 1) * 0.5;
        $boxZPosition = $number * 5;

        echo '
	<a-entity class="slide" id="slide-'. $realNumber .'" data-cameraposition="0 '. $cameraHeight .' '. $boxZPosition .'" data-camerarotation="270 270 90">
		<a-box
		    static-body
			width="10"
			height="5"
			depth="'. $boxDepth .'"
			position="0 '. $boxYPosition .' '.$boxZPosition. '"
			rotation="270 270 90"></a-box>

		<a-image src="#slide-'.$filename.'"
				 width="10"
				 height="5"
				 position="0 '. $boxDepth .' ' .$boxZPosition .'"
				 rotation="270 270 90"></a-image>
	</a-entity>';
    }
}

echo '
</a-scene>
</body>
</html>';
