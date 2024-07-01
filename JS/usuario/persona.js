export class Persona {
    constructor(nombre, apellido, telefono, correo, descripcion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.descripcion = descripcion;
    }

    static obtenerPersonas() {
        return JSON.parse(localStorage.getItem('personas')) || [];
    }

    static almacenarPersona(persona) {
        let personas = this.obtenerPersonas();
        personas.push(persona);
        localStorage.setItem('personas', JSON.stringify(personas));
    }
}
