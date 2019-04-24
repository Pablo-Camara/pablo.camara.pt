<?php
session_start();


if(isset($_SESSION['msg_sent'])){
    $res = json_encode([
      'status' => 0,
      'message' => 'Você já enviou uma mensagem, por favor aguarde pela resposta ou entre em contacto através de outro meio, obrigado.'
    ]);

    echo $res;
    die();
}

$debug = false;

if($debug){
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
}


require_once 'vendor/php/Medoo.php';
require_once 'vendor/php/PHPMailer/Exception.php';
require_once 'vendor/php/PHPMailer/PHPMailer.php';
require_once 'vendor/php/PHPMailer/SMTP.php';

require_once 'php/functions.php';


// Using Medoo namespace
use Medoo\Medoo;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$database = new Medoo([
	// required
	'database_type' => 'mysql',
	'database_name' => 'pablocam_pc',
	'server' => 'localhost',// dev mode : 'pc_mysql',
	'username' => 'pablocam_root',
	'password' => 'PabloCamara2019Mailer',

	// [optional]
	'charset' => 'utf8mb4',
	'collation' => 'utf8mb4_general_ci',
	'port' => 3306
]);

$data = json_decode(file_get_contents('php://input'), true);

$ip = GetIP();


$database->insert("messages", [
	"name" => $data['name'],
	"email" => $data['email'],
  "phone" => $data['phone'],
  "email" => $data['email'],
  "subject" => $data['subject'],
  "message" => $data['message'],
  "ip" => $ip
]);

if(! $database->id() && $debug ) {
  var_dump($database->error());
  die();
}


$mail = new PHPMailer();
$mail->IsSMTP();
$mail->CharSet = 'UTF-8';

$mail->Host       = "sv53.ifastnet2.org"; // SMTP server example
$mail->SMTPDebug  = 0;                     // enables SMTP debug information (for testing)
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->SMTPSecure = "ssl";
$mail->Port       = 290;                    // set the SMTP port
$mail->Username   = "mailer@pablo.camara.pt"; // SMTP account username example
$mail->Password   = "PabloCamara2019Mailer";        // SMTP account password example


//Recipients
$mail->setFrom('mailer@pablo.camara.pt', 'Pablo Camara');
$mail->addAddress('pablo@camara.pt', 'Pablo Camara');     // Add a recipient
// Add a recipient
$mail->addReplyTo(trim(strtolower($data['email'])), $data['name']);

// Content
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Nova mensagem: ' . $data['subject'];
$mail->Body    = 'Você tem uma nova mensagem enviada através do teu site pessoal.<br/><br/>';
$mail->Body    .= 'Mensagem de: <br/><b>' . $data['name'] . '</b><br/>';
$mail->Body    .= 'Contacto telefonico: <br/><b>' . $data['phone'] . '</b><br/>';
$mail->Body    .= 'Email: <br/><b>' . $data['email'] . '</b><br/>';
$mail->Body    .= 'Assunto: <br/><b>' . $data['subject'] . '</b><br/>';
$mail->Body    .= 'IP: <br/><b>' . $ip . '</b><br/>';
$mail->Body    .= 'Database record ID: <b>' . $database->id() . '</b><br/>';
$mail->Body    .= 'Mensagem:<br/><b>' . $data['message'] . '</b><br/>';

if(!$debug){
  $mail->send();
}



$res = json_encode([
  'status' => 1,
  'message' => 'Mensagem enviada com successo! Entrarei em contacto muito em breve, obrigado!'
]);

$_SESSION['msg_sent'] = true;

echo $res;

?>
