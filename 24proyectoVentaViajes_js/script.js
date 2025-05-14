//1 Desustructuracion de datos 
import {cali, barranquilla, maicao, santamarta} from "./ciudades.js";

//2 obtener elementos del DOM html
let enlaces = document.querySelectorAll('a');

let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let descripcionElemento = document.getElementById('descripcion');
let precioElemento = document.getElementById('precio');

//3 recorrer los enlaces en bucle. evento click
//5 for each, es un bucle que recorre los elementos de un array o una colección iterable.

enlaces.forEach(function(enlace) {
    // e es el objeto de evento
    enlace.addEventListener('click', function(e) {
        // Prevenir la navegación predeterminada
        e.preventDefault();
        
        //Remover activo o active de todos los enlaces
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('active');
        });
        
        //Agregar la class active al enlace actual
        this.classList.add('active');
        
        //Obtener el contenido según el enlace
        let contenido = obtenerContenido(this.textContent);
        
        //Mostrar la información en el DOM
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        descripcionElemento.innerHTML = contenido.descripcion;
        precioElemento.innerHTML = contenido.precio;
    });
});

//4 Función para traer la información correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Cali': cali, 
        'Barranquilla': barranquilla,
        'Maicao': maicao,
        'Santa Marta': santamarta
    };
    return contenido[enlace];
}