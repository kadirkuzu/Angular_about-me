<?php
$email = $_POST["email"];
$password = $_POST["password"];

if ($email == "g221210351" && $password == "123456") {
    echo "Hoşgeldiniz " . $email;
} else {
    echo "Hatalı giriş";
}
?>