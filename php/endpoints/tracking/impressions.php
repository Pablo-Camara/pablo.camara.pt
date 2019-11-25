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

require_once '../../classes/UserConnection.php';


try {
	// Tries inserting into the Database

	$database = require_once '../../configs/database/config.php';
	

	$ip = UserConnection::GetIP();

	$database->insert("impressions", [
		"impression_datetime" => date('Y-m-d H:i:s'),
		"user_id" => isset($_SESSION['uid']) ? $_SESSION['uid'] : null,
		"url" => $_SERVER["HTTP_REFERER"],
		"country_code" => $_SERVER["HTTP_CF_IPCOUNTRY"],
		"ip" => $ip,
		"screen_width" => $_POST['sw'],
		"screen_height" => $_POST['sh']
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
