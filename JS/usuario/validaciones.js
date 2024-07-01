export class Validador {
    static numero(valor) {
        return !isNaN(valor.trim());
    }

    static cadena(valor) {
        return typeof valor === "string" && /^[A-Za-z,\s]+$/.test(valor.trim());
    }

    static correo(correo) {
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return correoRegex.test(correo.trim());
    }

    static validarFormulario(form) {
        const nombreInput = form.querySelector("#nombre");
        const apellidoInput = form.querySelector("#apellido");
        const telefonoInput = form.querySelector("#telefono");
        const correoInput = form.querySelector("#correo");
        const descripcionInput = form.querySelector("#descripcion");

        const nombre = nombreInput.value.trim().toLowerCase();
        const apellido = apellidoInput.value.trim();
        const telefono = telefonoInput.value.trim();
        const correo = correoInput.value.trim();
        const descripcion = descripcionInput.value.trim();

        let isValid = true;

        if (nombreInput && apellidoInput) {
            if (!Validador.cadena(nombre) || !Validador.cadena(apellido)) {
                if (document.getElementById('nombreError')) {
                    document.getElementById('nombreError').textContent = "El nombre debe contener solo letras.";
                }
                nombreInput.classList.add('is-invalid');
                isValid = false;
            } else {
                if (document.getElementById('nombreError')) {
                    document.getElementById('nombreError').textContent = "";
                }
                nombreInput.classList.remove('is-invalid');
            }

            if (!Validador.cadena(apellido) || !Validador.cadena(apellido)) {
                if (document.getElementById('apellidoError')) {
                    document.getElementById('apellidoError').textContent = "El apellido debe contener solo letras.";
                }
                apellidoInput.classList.add('is-invalid');
                isValid = false;
            } else {
                if (document.getElementById('apellidoError')) {
                    document.getElementById('apellidoError').textContent = "";
                }
                apellidoInput.classList.remove('is-invalid');
            }
        }

        if (telefonoInput) {
            if (!Validador.numero(telefono)) {
                if (document.getElementById('telefonoError')) {
                    document.getElementById('telefonoError').textContent = "El teléfono debe contener solo números.";
                }
                telefonoInput.classList.add('is-invalid');
                isValid = false;
            } else {
                if (document.getElementById('telefonoError')) {
                    document.getElementById('telefonoError').textContent = "";
                }
                telefonoInput.classList.remove('is-invalid');
            }
        }
        if (correoInput) {
            if (!Validador.correo(correo)) {
                if (document.getElementById('correoError')) {
                    document.getElementById('correoError').textContent = "El correo electrónico ingresado no es válido.";
                }
                correoInput.classList.add('is-invalid');
                isValid = false;
            } else {
                if (document.getElementById('correoError')) {
                    document.getElementById('correoError').textContent = "";
                }
                correoInput.classList.remove('is-invalid');
            }
        }
     

        if (descripcionInput) {
            if (!Validador.cadena(descripcion)) {
                if (document.getElementById('descripcionError')) {
                    document.getElementById('descripcionError').textContent = "La descripción debe contener solo letras, números y espacios.";
                }
                descripcionInput.classList.add('is-invalid');
                isValid = false;
            } else {
                if (document.getElementById('descripcionError')) {
                    document.getElementById('descripcionError').textContent = "";
                }
                descripcionInput.classList.remove('is-invalid');
            }
        }

        return isValid;
    }
}
