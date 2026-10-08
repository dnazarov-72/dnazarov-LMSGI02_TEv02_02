// Lista de imagenes para el carrusel
const imagenes = [
    'imagenes/coche1.png',
    'imagenes/coche2.png',
    'imagenes/coche3.png'
];
// Indice de imagen actual
let indiceActual = 0;

// Funcion para cambiar la siguiente imagen
function siguienteImagen() {
    indiceActual++;
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    document.getElementById('carusel-img').src = imagenes[indiceActual];
}
// Funcion para cambiar a la imagen anterior
function anteriorImagen() {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }
    document.getElementById('carusel-img').src = imagenes[indiceActual];
}

