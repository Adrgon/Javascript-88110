// clases --> sugar sintax

class Persona {
    constructor(nombre="Adrian", edad=49, direccion="secreto"){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
    cumplirAnios() {
        this.edad +=1;
        return this.nombre + " ahora tiene " + this.edad + " años.";
    }

    mudarse(nuevaDireccion) {
        this.direccion = nuevaDireccion;
    }
}

const personaNueva = new Persona("Laura", 25, "Aca nommas")
console.log(personaNueva)
const otraPersona = new Persona("Nicolas", 15, "Alla lejos")
console.log(otraPersona)

personaNueva.cumplirAnios();
console.log(personaNueva)
console.log(personaNueva.edad + " años")

const p = new Persona();
console.log(p);

p.mudarse("Avenida Siempre Viva 55");

console.log(p.direccion)
