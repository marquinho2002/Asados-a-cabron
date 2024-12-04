(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();function s(){const n=document.getElementById("menu-icon"),e=document.createElement("div");e.classList.add("overlay"),e.innerHTML=`
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
    `,document.body.appendChild(e),n.addEventListener("click",()=>{e.classList.toggle("active")}),document.getElementById("close-button").addEventListener("click",()=>{e.classList.remove("active")})}function l(){console.log("iniciarGallery fue llamada");const e=document.querySelector(".gallery").querySelectorAll(".image-container img"),i=document.createElement("div");i.classList.add("modal");const r=document.createElement("img");i.appendChild(r),document.body.appendChild(i),e.forEach(t=>{t.addEventListener("click",()=>{r.src=t.src,i.style.display="flex"})}),i.addEventListener("click",()=>{i.style.display="none"})}function c(){document.getElementById("consultar-disponibilidad").addEventListener("click",()=>{const e=document.getElementById("mensaje-disponibilidad");Math.random()>.5?(e.textContent="¡Horario disponible!",e.style.backgroundColor="#4CAF50"):(e.textContent="No hay disponibilidad para el horario seleccionado.",e.style.backgroundColor="#f44336"),e.style.display="block"})}function d(){document.getElementById("form-reserva").reset();const e=document.getElementById("mensaje-disponibilidad");e.style.display="none",alert("¡Reserva realizada con éxito!")}function m(){const n=document.getElementById("numeros");n.style.display==="block"?n.style.display="none":n.style.display="block"}function u(){document.querySelector(".btn-reservar").addEventListener("click",()=>{alert("¡Reservación con éxito!")})}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM completamente cargado"),s(),l(),c(),u(),d(),m()});
