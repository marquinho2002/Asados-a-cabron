// Función para consultar disponibilidad
export function consultarDisponibilidad() {
    const botonConsultar = document.getElementById("consultar-disponibilidad");
    botonConsultar.addEventListener("click", () => {
        const mensajeDisponibilidad = document.getElementById("mensaje-disponibilidad");
        const isAvailable = Math.random() > 0.5; // Simula la disponibilidad

        if (isAvailable) {
            mensajeDisponibilidad.textContent = "¡Horario disponible!";
            mensajeDisponibilidad.style.backgroundColor = "#4CAF50";
        } else {
            mensajeDisponibilidad.textContent = "No hay disponibilidad para el horario seleccionado.";
            mensajeDisponibilidad.style.backgroundColor = "#f44336";
        }

        mensajeDisponibilidad.style.display = "block";
    });
}

// Función para realizar la reserva
export function reservar() {
    const form = document.getElementById("form-reserva");
    form.reset(); // Resetea el formulario

    const mensajeDisponibilidad = document.getElementById("mensaje-disponibilidad");
    mensajeDisponibilidad.style.display = "none"; // Oculta el mensaje

    alert("¡Reserva realizada con éxito!");
}

// Función para mostrar u ocultar los números de taxis
export function mostrarNumeros() {
    const numerosDiv = document.getElementById("numeros");

    if (numerosDiv.style.display === "block") {
        numerosDiv.style.display = "none";
    } else {
        numerosDiv.style.display = "block";
    }
}

// Función para configurar el evento del botón "Reservar"
export function configurarBotonReservar() {
    const botonReservar = document.querySelector(".btn-reservar");

    botonReservar.addEventListener("click", () => {
        alert("¡Reservación con éxito!");
    });
}
