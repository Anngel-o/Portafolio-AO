<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $comentario = $_POST["comentario"];
    $para = "anngelo.sys@gmail.com"; 
    $asunto = "Nuevo mensaje de contacto";

    // Agrega la dirección del remitente al cuerpo del mensaje
    $mensaje = "Mensaje de: " . $para . "\n\n" . $comentario;

    // Encabezados para el correo electrónico
    $headers = "From: " . $para . "\r\n";
    $headers .= "Reply-To: " . $para . "\r\n";

    // Envía el correo electrónico
    mail($para, $asunto, $mensaje, $headers);
}
?>
