<?php


require_once '../../../vendor/php/Medoo.php';
use Medoo\Medoo;

return new Medoo([
  	// required
  	'database_type' => 'mysql',
  	'database_name' => 'pablocamara',
  	'server' => 'pc_mysql',// dev mode : 'pc_mysql',
  	'username' => 'pc_main_user2019',
  	'password' => 'pc_main_user_pwd2019',

  	// [optional]
  	'charset' => 'utf8mb4',
  	'collation' => 'utf8mb4_general_ci',
  	'port' => 3306
  ]);