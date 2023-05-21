<?php
$email = $_POST["email"];
$password = $_POST["password"];

if (($email == "g221210351" $email == "kadirkuzu.5656@gmail.com"|| ) && $password == "123456") {
    $response = array('result' => true, 'message' => 'Hoşgeldiniz ' . $email);
} else {
    $response = array('result' => false, 'message' => 'Hatalı giriş');
}

echo json_encode($response);
?>