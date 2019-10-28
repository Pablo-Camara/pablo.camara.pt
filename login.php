<?php
session_start();
$debug = true;
header('Content-type: application/json; charset=utf-8');

if(isset($_SESSION['uid'])){
    $res = json_encode([
      'status' => 1,
	  'message' => 'Já tinhas iniciado sessão antes.'
    ]);

    echo $res;
    die();
}



if($debug){
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
}

require_once 'php/functions.php';

require_once 'vendor/php/PHPMailer/Exception.php';
require_once 'vendor/php/PHPMailer/PHPMailer.php';
require_once 'vendor/php/PHPMailer/SMTP.php';

function login_failed(){
	$res = json_encode([
	  'status' => 0,
	  'message' => "Não foi possível iniciar sessão. Por favor tente mais tarde."
	]);

	echo $res;
	die();
}

function login_success(){
	$res = json_encode([
	  'status' => 1
	]);

	echo $res;
	die();
}

function missing_data(){
	$res = json_encode([
	  'status' => 0,
	  'message' => "Preêncha todos os campos correctamente."
	]);

	echo $res;
	die();
}

function invalid_login(){
	$res = json_encode([
	  'status' => 0,
	  'message' => "Email e/ou palavra-passe incorrectos."
	]);

	echo $res;
	die();
}

function log_login_attempt($database,$email,$ip,$status){
	$database->insert("login_attempts", [
		"email" => $email,
		"login_date" => date('Y-m-d H:i:s'),
		"ip" => $ip,
		"status" => $status
	]);
}


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


try {
	// Tries inserting into the Database

	$database = require_once 'php/db_config.php';

	$ip = GetIP();
	
	if(empty(trim($_POST['email'])) || empty(trim($_POST['password']))){
		
		log_login_attempt($database,$_POST['email'],$ip,'missing_data');
		missing_data();
	}

	$user = $database->select("users", [
		"user_id",
		"email",
		"first_name",
		"last_name"
	], [
		"email" => $_POST['email'],
		"password_hash" => hash('sha256', $_POST['password'], false)
	]);

	
	if(count($user) > 0){
		// gets first user data and stores into session
		$_SESSION['uid'] = $user[0]['user_id'];
		
		log_login_attempt($database,$_POST['email'],$ip,'login_success');
		login_success();
		
		
	} else {
		
		log_login_attempt($database,$_POST['email'],$ip,'invalid_login');
		invalid_login();
	}
	
} catch (Exception $e) {
    login_failed();
}


login_failed();






?>
