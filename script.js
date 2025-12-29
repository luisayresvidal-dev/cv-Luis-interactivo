$(document).ready(function() {

    // 1. EVENTO: Botón de Modo Oscuro (Tema claro/oscuro) 
    $('#darkModeBtn').click(function() {
        $('body').toggleClass('dark-mode');
        
        // Cambiar el texto del botón según el modo
        if ($('body').hasClass('dark-mode')) {
            $(this).html('<i class="bi bi-sun-fill"></i> Modo Claro');
        } else {
            $(this).html('<i class="bi bi-moon-fill"></i> Modo Oscuro');
        }
    });

    // 2. EVENTO: Validación del formulario en tiempo real 
    $('#email').on('input', function() {
        const email = $(this).val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato básico de correo
        
        if (!emailRegex.test(email)) {
            $('#emailError').text('Por favor, ingresa un correo válido.');
            $(this).addClass('is-invalid');
        } else {
            $('#emailError').text('');
            $(this).removeClass('is-invalid').addClass('is-valid');
        }
    });

    // 3. EVENTO: Alerta de envío y validación final [cite: 13, 16]
    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue
        
        const nombre = $('#nombre').val();
        const email = $('#email').val();

        if (nombre === "" || email === "") {
            alert("Por favor, completa los campos obligatorios.");
        } else {
            alert('¡Gracias ' + nombre + '! Tu mensaje ha sido enviado con éxito.');
            this.reset(); // Limpia el formulario después de enviar
            $('#email').removeClass('is-valid');
        }
    });

});