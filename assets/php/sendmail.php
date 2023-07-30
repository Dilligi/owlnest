<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->isHTML(true);

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$form_subject = $_POST["form_subject"];

$mail->setFrom('adm@' . $_SERVER['HTTP_HOST'], 'Your best site');
$mail->addAddress('fkapns@gmail.com');
$mail->addAddress('kirill@ketak.us');

$title = $form_subject;
$body = "
<b>Имя:</b>". $name."<br>
<b>Почта:</b>". $email."<br>
<b>Телефон:</b>". $phone;

$mail->Subject = $title;
$mail->Body = $body;   

$mail->send();
?>