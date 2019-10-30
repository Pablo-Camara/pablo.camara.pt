<?php

// POST Request or Redirect
if($_SERVER['REQUEST_METHOD'] !== 'POST'){
	header('Location: /');
	die();
}

session_start();

// Debug messages:
$debug = true;

if($debug){
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
}

// JSON Response
header('Content-type: application/json; charset=utf-8');

// Check Login
if(!isset($_SESSION['uid']) || empty($_SESSION['uid'])){
    $res = json_encode([
      'status' => 0,
	  'message' => 'login_required'
    ]);

    echo $res;
    die();
}


require_once 'php/functions.php';


function check_request_data(){
	if( empty( trim( $_POST['fields'] ) ) ){
		$res = json_encode([
		  'status' => 0,
		  'message' => "Parâmetro em falta."
		]);

		echo $res;
		die();
	}
}

function fetch_failed_response(){
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

	
	check_request_data();
	

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
			'user' => []
 		];
		
		for($i = 0; $i < count($req_fields); $i++){
			$response['user'][$req_fields[$i]] = $user[0][$req_fields[$i]];
		}
		
		echo json_encode($response);
		die();
		
	} 
	
} catch (Exception $e) {
    fetch_failed_response();
}


fetch_failed_response();






?>
