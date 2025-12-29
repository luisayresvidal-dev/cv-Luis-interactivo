// 1. Capturar los elementos del DOM usando getElementById
const formulario = document.getElementById('registroForm');
const mensajeEstado = document.getElementById('mensajeEstado');

// 2. Escuchar el evento de envío (submit)
formulario.addEventListener('submit', function(event) {
    // Evitamos que el formulario se envíe y recargue la página
    event.preventDefault();

    // Capturar los valores actuales de los inputs
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const edad = parseInt(document.getElementById('edad').value);

    // Limpiar mensajes anteriores
    mensajeEstado.textContent = "";
    mensajeEstado.style.color = "black";

    // 3. Ejecutar validaciones
    const error = validarFormulario(nombre, correo, edad);

    if (error) {
        mensajeEstado.textContent = error;
        mensajeEstado.style.color = "red";
    } else {
        mensajeEstado.textContent = "¡Registro exitoso! Los datos son correctos.";
        mensajeEstado.style.color = "green";
        formulario.reset(); // Limpia los campos tras el éxito
    }
});

// 4. Función para verificar campos y reglas de negocio
function validarFormulario(nombre, correo, edad) {
    // Verificar que los campos no estén vacíos
    if (nombre === "" || correo === "" || isNaN(edad)) {
        return "Todos los campos son obligatorios.";
    }

    // Asegurar que la edad sea un número mayor de 18
    if (edad < 18) {
        return "Debes ser mayor de 18 años para registrarte.";
    }

    return null; // Todo está bien
}