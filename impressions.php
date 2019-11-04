<?php

// POST Request or Redirect
if($_SERVER['REQUEST_METHOD'] !== 'POST'){
	header('Location: /');
	die();
}

session_start();
$debug = false;

if($debug){
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
}

require_once 'php/functions.php';


try {
	// Tries inserting into the Database

	$database = require_once 'php/db_config.php';
	

	$ip = GetIP();

	$database->insert("impressions", [
		"impression_datetime" => date('Y-m-d H:i:s'),
		"url" => $_SERVER["HTTP_REFERER"],
		"ip" => $ip,
		"screen_width" => $_POST['sw'],
		"screen_height" => $_POST['sh'],
		"isFirefox" => $_POST['isFirefox'],
		"isChrome" => $_POST['isChrome'],
		"isSafari" => $_POST['isSafari'],
		"isOpera" => $_POST['isOpera'],
		"isIE" => $_POST['isIE'],
		"isEdge" => $_POST['isEdge'],
		"isBlink" => $_POST['isBlink']
	]);
  
	$res = json_encode([
	  'status' => 1,
	  'message' => 'sent'
	]);

	echo $res;
	die();
  
} catch (Exception $e) {
    // Do nothing
}





?>
