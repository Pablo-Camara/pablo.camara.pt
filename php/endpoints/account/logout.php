<?php
if($_SERVER['REQUEST_METHOD'] !== 'POST'){
	header('Location: /');
	die();
}

session_start();
session_unset();
session_destroy();

header('Content-type: application/json; charset=utf-8');
$res = json_encode([
      'status' => 1,
	  'message' => 'logged_off'
    ]);

echo $res;
die();