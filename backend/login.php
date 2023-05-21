<?php
$email = $_POST["email"];
$password = $_POST["password"];

if (($email == "g221210351" || $email == "g221210351@sakarya.edu.tr" ) && $password == "g221210351") {
    $response = array('result' => true, 'message' => 'Hoşgeldiniz ' . $email);
} else {
    $response = array('result' => false, 'message' => 'Hatalı giriş');
}

echo json_encode($response);
?>