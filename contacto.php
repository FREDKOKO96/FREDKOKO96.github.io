<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $comentarios = $_POST["comentarios"];

    $destinatario = "fred_huerta@hotmail.com"; // Cambia esto al correo al que deseas enviar el mensaje
    $asunto = "Nuevo mensaje de contacto";

    $mensaje = "Nombre: $nombre\n";
    $mensaje .= "Correo: $correo\n";
    $mensaje .= "Teléfono: $telefono\n";
    $mensaje .= "Comentarios:\n$comentarios";

    mail($destinatario, $asunto, $mensaje);

    // Redirige a una página de confirmación o a la misma página del formulario
    header("Location: confirmacion.html");
    exit();
}
?>