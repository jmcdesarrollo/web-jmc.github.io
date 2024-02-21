<?php

// Recogida de los datos del formulario
$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$tema = $_POST["tema"];
$mensaje = $_POST["mensaje"];

// Envío de un correo electrónico
mail("javi86medina@hotmail.com", "Formulario de contacto", "Nombre: $nombre\nTelefono: $telefono\nCorreo: $correo\nTema: $tema\nMensaje: $mensaje", "From: $correo");

?>