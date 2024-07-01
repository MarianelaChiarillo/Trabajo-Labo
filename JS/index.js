import { mostrarCarusel, mostrarTodasPropiedades } from './carusel.js';
import { renderizarBlog, mostrarModal } from './blog.js';
import { renderizarCaracteristicas } from './caracteristicas.js';
import { cambiarComentario } from './comentarios.js';
import { mostrarModalF, cerrarModal, mostrarModalEnvio, cerrarModalConfirm, limpiarCamposFormulario } from './formulario.js';
import { Validador } from './usuario/validaciones.js';
import { Persona } from './usuario/persona.js';

document.addEventListener('DOMContentLoaded', () => {
    mostrarCarusel();
    
    document.querySelector('.property-article.btn-green').addEventListener('click', mostrarTodasPropiedades);
    
    renderizarBlog();
    const someElement = document.querySelector('.blog-article');
    if (someElement) {
        someElement.addEventListener('click', () => {
            mostrarModal(0); 
        });
    }

    renderizarCaracteristicas(); 

    cambiarComentario();
    setInterval(cambiarComentario, 10000); 

    let btn = document.getElementById('contactButton');
    let span = document.getElementsByClassName('close')[0];
    let btnOk = document.getElementById('okButton');
    let form = document.getElementById('contactForm');

    btn.onclick = function () {
        mostrarModalF();
    };

    span.onclick = function () {
        cerrarModal();
    };

    window.onclick = function (event) {
        let modal = document.getElementById('contactModal');
        if (event.target == modal) {
            cerrarModal();
        }
    };
    
    function obtenerValoresFormulario() {
        return {
            nombre: document.getElementById('nombre').value.trim(),
            apellido: document.getElementById('apellido').value.trim(),
            telefono: document.getElementById('telefono').value.trim(),
            correo: document.getElementById('correo').value.trim(),
            descripcion: document.getElementById('descripcion').value.trim()
        };
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (Validador.validarFormulario(form)) {
            let { nombre, apellido, telefono, correo, descripcion } = obtenerValoresFormulario();

            let nuevaPersona = new Persona(nombre, apellido, telefono, correo, descripcion);
            Persona.almacenarPersona(nuevaPersona);
            
            limpiarCamposFormulario(form);
            cerrarModal();
            mostrarModalEnvio();
        }

        form.classList.add('was-validated');
    });

    btnOk.onclick = function() {
        cerrarModalConfirm();
    };
});
