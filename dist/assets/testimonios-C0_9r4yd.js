import"./main-DZOH48Ll.js";/* empty css             */document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".testimonios__list");document.querySelectorAll(".testimonios__item").length;let t=0;const o=320;function s(){t++,t>=3&&(t=0),n()}function n(){const r=-t*o;e.style.transition="transform 0.5s ease",e.style.transform=`translateX(${r}px)`}function i(){setInterval(()=>{s()},2e3)}n(),i()});