import comentarios from './dataJs/dataComentarios.js';

let index = 0; 

function renderComentario(index) {
    const commentsBox = document.querySelector('.comments-box');
    const comentario = comentarios[index];
    
    commentsBox.innerHTML = '';
    
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    
    const imagen = document.createElement('img');
    imagen.src = obtenerImagen(comentario);
    imagen.alt = 'Avatar';
    
    const texto = document.createElement('p');
    texto.textContent = comentario.texto;
    
    const autor = document.createElement('strong');
    autor.textContent = comentario.autor;
    
    commentDiv.appendChild(imagen);
    commentDiv.appendChild(texto);
    commentDiv.appendChild(autor);
    
    commentsBox.appendChild(commentDiv);
}

function obtenerImagen(comentario) {
    return comentario.imagen || './assets/images/comilla.svg';
}

function ajustarDuracionAnimacion() {
    const comments = document.querySelectorAll('.comment');
    const duration = comentarios.length * 10; 
    const keyframes = `slide-left ${duration}s linear infinite`;
    
    comments.forEach(comment => {
        comment.style.animation = keyframes;
    });
}

export function cambiarComentario() {
    renderComentario(index);
    ajustarDuracionAnimacion();
    index = (index + 1) % comentarios.length; 
}











































/*const comentarios = [
    { texto: "Excelente servicio, el espacio cumplió con todas nuestras expectativas. Muy recomendado.", autor: "Ana Gómez" },
    { texto: "El lugar es perfecto para eventos, amplio y bien equipado. El equipo de atención al cliente fue excepcional.", autor: "Pedro Martínez" },
    { texto: "Alquilamos este espacio para una sesión fotográfica y quedamos encantados. La luz natural era ideal y el ambiente muy acogedor.", autor: "María López" }
];

let index = 0; 

function renderComentario(index) {
    const commentsBox = document.querySelector('.comments-box');
    const comentario = comentarios[index];
    
    commentsBox.innerHTML = '';
    
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    
    const imagen = document.createElement('img');
    imagen.src = obtenerImagen(comentario);
    imagen.alt = 'Avatar';
    
    const texto = document.createElement('p');
    texto.textContent = comentario.texto;
    
    const autor = document.createElement('strong');
    autor.textContent = comentario.autor;
    
    commentDiv.appendChild(imagen);
    commentDiv.appendChild(texto);
    commentDiv.appendChild(autor);
    
    commentsBox.appendChild(commentDiv);
}

function obtenerImagen(comentario) {
    return comentario.imagen || './assets/images/comilla.svg';
}

function ajustarDuracionAnimacion() {
    const comments = document.querySelectorAll('.comment');
    const duration = comentarios.length * 10; 
    const keyframes = `slide-left ${duration}s linear infinite`;
    
    comments.forEach(comment => {
        comment.style.animation = keyframes;
    });
}

function cambiarComentario() {
    renderComentario(index);
    ajustarDuracionAnimacion();
    index = (index + 1) % comentarios.length; 
}

document.addEventListener('DOMContentLoaded', () => {
    cambiarComentario();
    setInterval(cambiarComentario, 10000); 
});
*/