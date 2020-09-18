<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\OAuth;

    $name = $_POST['user_name'];
    $email = $_POST['user_email'];
    $error = 'xn----8sbpj1akeecdle1m.xn--p1ai/404.html';




    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";
    require 'PHPMailer/OAuth.php';

    $mail = new PHPMailer();
$mail->CharSet = "utf-8";

    //smtp settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "maximkasadrey@gmail.com";
    $mail->Password = 'vvvppp123';
    $mail->Port = 465;
    $mail->SMTPSecure = "ssl";

    //email settings
    $mail->isHTML(true);
    $mail->setFrom('784618@gmail.com');
    $mail->addAddress('784618@gmail.com', 'Юрист-партнер.рф');


$mail->Subject = 'Заявка с сайта Юрист-партнер.рф';
$mail->Body    = '-Codovstvo<br>-'.$name . ' оставил заявку<br>-его телефон ' .$email. '';
$mail->AltBody = '';
//$mail->SMTPDebug  = 1;

if (empty($_POST['user_email']) ||
        empty($_POST['user_name']) ||
        preg_match('/[0-9]/', $_POST['user_name'])) {
        header('Location: '.$error);
    } else {
        if(!$mail->send()) {
    header('Location: '.$error);
} else {
    header('Location: index.html');
}
    }
?>
