<?php
$nombre = $_POST['user'];
$email = $_POST['email'];
$mensaje = $_POST['message'];

// Filtraje y validacion de datos

$para      = 'samanta493@gmail.com';
$titulo    = 'El título';
$mensaje   = "Nombre: " . $nombre  . ", Correo: " . $email . ", Mensaje: " . $mensaje;

mail($para, $titulo, $mensaje);

echo json_encode(["success" => 1]);
