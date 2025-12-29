$(document).ready(function() {
    
    // 1. Configuración del carrusel para que funcione automáticamente
    $('#carruselTienda').carousel({
        interval: 3000,
        ride: 'carousel'
    });

    // 2. Evento Click en Favoritos
    $('.btn-favorito').on('click', function() {
        // Obtenemos la tarjeta padre
        const tarjeta = $(this).closest('.producto-card');
        const nombreProducto = tarjeta.find('.card-title').text();
        
        // Verificamos si ya es favorito mediante una clase (Manipulación DOM)
        const esFavorito = tarjeta.hasClass('favorito-resaltado');

        if (!esFavorito) {
            // AÑADIR A FAVORITOS
            tarjeta.addClass('favorito-resaltado');
            $(this).text('Quitar de Favoritos').removeClass('btn-dark').addClass('btn-outline-danger');
            mostrarMensaje(`✔️ ${nombreProducto} añadido a favoritos`);
        } else {
            // ELIMINAR DE FAVORITOS
            tarjeta.removeClass('favorito-resaltado');
            $(this).text('Añadir a Favoritos').removeClass('btn-outline-danger').addClass('btn-dark');
            mostrarMensaje(`❌ ${nombreProducto} eliminado de favoritos`);
        }
    });

    // 3. Función para el mensaje dinámico
    function mostrarMensaje(texto) {
        $('#mensaje-flotante')
            .text(texto)
            .stop(true, true) // Detiene animaciones previas para evitar encolamiento
            .fadeIn(400)
            .delay(1500)
            .fadeOut(400);
    }
});