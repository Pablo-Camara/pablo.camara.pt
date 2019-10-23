<?php
session_start();
$debug = false;

if(!$debug && isset($_SESSION['msg_sent'])){
    $res = json_encode([
      'status' => 0,
      'message' => 'Você já enviou uma mensagem, por favor aguarde pela resposta ou entre em contacto através de outros meios, obrigado.'
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


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
  // Tries inserting into the Database

  $database = require_once 'php/db_config.php';

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
} catch (Exception $e) {
    // Do nothing
}



try {
  // Tries sending the email
  $mail = new PHPMailer();
  $mail->IsSMTP();
  $mail->CharSet = 'UTF-8';

  $mail->Host       = "smtp.migadu.com"; // SMTP server example
  $mail->SMTPDebug  = 0;                     // enables SMTP debug information (for testing)
  $mail->SMTPAuth   = true;                  // enable SMTP authentication
  $mail->SMTPSecure = "tls";
  $mail->Port       = 587;                    // set the SMTP port
  $mail->Username   = "mailer@camara.pt"; // SMTP account username example
  $mail->Password   = '$pc_mailer_pwd_2019$';        // SMTP account password example


  //Recipients
  $mail->setFrom('mailer@camara.pt', 'Pablo Camara Mailer');
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
} catch (Exception $e) {
    // Do nothing
}




?>
