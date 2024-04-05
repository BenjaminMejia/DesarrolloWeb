function actualizarEtiqueta(idTXT, idP) {
    var texto = document.getElementById("nombre").value;
    document.getElementById("nombre-compra").innerText = texto;
    texto = document.getElementById("correo").value;
    document.getElementById("correo-compra").innerText = texto;
    texto = document.getElementById("telefono").value;
    document.getElementById("telefonoo-compra").innerText = texto;
    texto = document.getElementById("tipo-entrada").value;
    document.getElementById("entrada-compra").innerText = texto;
}

