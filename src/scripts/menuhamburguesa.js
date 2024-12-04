export function menuHamburguesa() {
    const menuToggle = document.getElementById('menu-icon');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Crear contenido del overlay
    overlay.innerHTML = `
        <div class="overlay-content">
            <div class="close-button" id="close-button">&times;</div>
            <a href="index.html">Inicio</a>
            <a href="menu.html">Menú</a>
            <a href="galeria.html">Galería</a>
            <a href="reservaciones.html">Reservaciones</a>
            <a href="contacto.html">Contacto</a>
            <a href="ubicacion.html">Ubicación</a>
            <a href="acercade.html">Acerca de</a>
            <a href="blog.html">Blog</a>
            <a href="promociones.html">Promociones</a>
            <a href="testimonios.html">Testimonios</a>
        </div>
    `;

    document.body.appendChild(overlay);

    menuToggle.addEventListener('click', () => {
        overlay.classList.toggle('active');
    });

    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
}