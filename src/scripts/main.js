import { menuHamburguesa } from './menuhamburguesa';
import { iniciarGallery } from './galeria';
import {
    consultarDisponibilidad,
    reservar,
    mostrarNumeros,
    configurarBotonReservar
} from './reservar'; // Reemplaza 'nombreArchivo' con el nombre real del archivo donde exportaste las funciones


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado');

    // Inicializar el menú hamburguesa
    menuHamburguesa();

    // Inicializar galería
    iniciarGallery();

    // Configurar eventos específicos
    consultarDisponibilidad();
    configurarBotonReservar();
    reservar();
    mostrarNumeros(); 

    

    
});
