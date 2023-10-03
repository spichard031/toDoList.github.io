document.addEventListener("DOMContentLoaded", function() {
    var agregarBtn = document.getElementById("agregar");
    var lista = document.getElementById("lista");

    agregarBtn.addEventListener("click", agregarTexto);

    function agregarTexto() {
        var textoIngresado = document.getElementById("texto").value;
        if (textoIngresado.trim() !== "") {
            var nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = textoIngresado;

            // Crear un botón de eliminar
            var botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.addEventListener("click", function() {
                lista.removeChild(nuevoElemento);
            });

            // Agregar el botón de eliminar al elemento de lista
            nuevoElemento.appendChild(botonEliminar);

            lista.appendChild(nuevoElemento);
            document.getElementById("texto").value = "";
        }
    }
});

