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

	$database = require_once '../../configs/config.php';
	

	$ip = UserConnection::GetIP();

	$database->insert("user_actions", [
		"action_datetime" => date('Y-m-d H:i:s'),
		"action_id" => $_POST['action_id'],
		"component_id" => $_POST['component_id'],
		"value" => isset($_POST['value']) && !empty($_POST['value']) ? $_POST['value'] : null,
		"user_id" => isset($_SESSION['uid']) ? $_SESSION['uid'] : null,
		"ip" => $ip,
		"url" => $_SERVER["HTTP_REFERER"],
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
