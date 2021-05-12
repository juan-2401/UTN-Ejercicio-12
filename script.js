function calcularPrecioTotal(precio){
    var impuesto = 1.16;
    var gastosEnvio = 10;
    var precioTotal = precio * impuesto + gastosEnvio;
    console.log(precioTotal);
}

calcularPrecioTotal(23.34);

const user0 = {
    nombre: "Marcelo",
    apellido: "Tinelli",
    edad: 50,
    nacionalidad: "Argentina",
    hijos: ['Maria', 'Francisco', 'Laura'],
    saludo: function saludo() {
        alert('Hola, soy ${this.nombre}');
    }
}

function Usuarios(nombre, apellido, edad, nacionalidad, hijos) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
    this.hijos = hijos;
}

let altauser1 = new Usuarios('Maria', 'Lopez', 40, 'Argentina', []);
let altauser2 = new Usuarios('Alicia', 'Vidal', 50, 'Argentina', []);
let altauser3 = new Usuarios('Carlos', 'Giribone', 60, 'Argentina', []);
let altauser4 = new Usuarios('Jorge', 'Elcano', 70, 'Argentina', []);
let altauser5 = new Usuarios('Teodoro', 'Estomba', 80, 'Argentina', []);

console.log(altauser2);

const personas = [];

personas.push(user0);
personas.push(altauser1);
personas.push(altauser2);
personas.push(altauser3);
personas.push(altauser4);
personas.push(altauser5);

personas.forEach(element => {
    document.write(`Nombre: ${element.nombre}, <br>
    Apellido: ${element.apellido}, <br>
    Edad: ${element.edad}, <br>
    Nacionalidad: ${element.nacionalidad}, <br>
    Hijos: ${element.hijos} <hr>`)
});