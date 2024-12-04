import { menuHamburguesa } from './menuhamburguesa';
import { iniciarGallery } from './galeria';
import {
    consultarDisponibilidad,
    reservar,
    mostrarNumeros,
    configurarBotonReservar
} from './reservar'; 


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado');

    
    menuHamburguesa();

    
    iniciarGallery();

    
    consultarDisponibilidad();
    configurarBotonReservar();
    reservar();
    mostrarNumeros(); 

    

    
});
