<?php
session_start();
$debug = true;

if($_SERVER['REQUEST_METHOD'] !== 'POST'){
	header('Location: /');
	die();
}

header('Content-type: application/json; charset=utf-8');



if(!isset($_SESSION['uid']) || empty($_SESSION['uid'])){
    $res = json_encode([
      'status' => 0,
	  'message' => 'login_required'
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


function missing_data(){
	$res = json_encode([
	  'status' => 0,
	  'message' => "Parâmetro em falta."
	]);

	echo $res;
	die();
}

function fetch_failed(){
	$res = json_encode([
	  'status' => 0,
	  'message' => "Não foi possível obter os dados do utilizador."
	]);

	echo $res;
	die();
}

try {
	// Tries inserting into the Database

	$database = require_once 'php/db_config.php';

	$ip = GetIP();
	
	if( empty( trim( $_POST['fields'] ) ) ){
		missing_data();
	}

	$user = $database->select("users", [
		"user_id",
		"email",
		"first_name",
		"last_name"
	], [
		"user_id" => $_SESSION['uid'],
	]);

	
	if(count($user) > 0){
		$req_fields = explode(',',$_POST['fields']);
		
		$response = [
			'status' => 1
		];
		
		for($i = 0; $i < count($req_field); $i++){
			$response[$req_field[$i]] = $user[0][$req_field[$i]];
		}
		
		echo json_encode($response);
		die();
		
	} 
	
} catch (Exception $e) {
    fetch_failed();
}


fetch_failed();






?>
