import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/Asados-a-cabron/', // Para GitHub Pages
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/partials'),
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                galeria: resolve(__dirname, 'galeria.html'),
                menu: resolve(__dirname, 'menu.html'),
                contacto: resolve(__dirname, 'contacto.html'),
                acercade: resolve(__dirname, 'acercade.html'),
                ubicacion: resolve(__dirname, 'ubicacion.html'),
                reservaciones: resolve(__dirname, 'reservaciones.html'),
                blog: resolve(__dirname, 'blog.html'),
                promociones: resolve(__dirname, 'promociones.html'),
                testimonios: resolve(__dirname, 'testimonios.html'),
            },
        },
    },
});
