<?php

// POST Request or Redirect
if($_SERVER['REQUEST_METHOD'] !== 'POST'){
	header('Location: /');
	die();
}

session_start();
require_once '../../classes/Translation.php';
$translationStrings = require '../../configs/translation/strings.php';
$lang = Translation::getLanguage();
$translator = new Translation($translationStrings,$lang);

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


require_once '../../classes/UserConnection.php';


function fetch_failed(){
	global $transator;
	$res = json_encode([
	  'status' => 0,
	  'message' => $translator->get('failed_to_get_user_data')
	]);

	echo $res;
	die();
}

try {

	$database = require_once '../../configs/database/config.php';


	// fetch user domains
	$domains = $database->select('user_domains', 
	[
		'[>]domains' => 'domain_id',
		'[>]domain_status' => 'domain_status_id',
	],
	[
		'domains.domain_id',
		'domains.url',
		'domains.https',
		'domains.www',
		'domains.expiration_date',
		'domains.buy_date',
		'domain_status.domain_status_id',
		'domain_status.domain_status_text',
		'domain_status.hexcolor',
		'user_domains.user_id',
		'user_domains.domain_role_ids',
	],
	[
		'user_id' => $_SESSION['uid'],
	]);

	
		
	$response = [
		'status' => 1,
		'domains' => $domains
	];
	
	echo json_encode($response);
	die();
	
} catch (Exception $e) {
    fetch_failed();
}






?>
