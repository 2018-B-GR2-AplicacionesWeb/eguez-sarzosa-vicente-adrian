var nombreVariable = 'valorVariable';
var edad = 1; // number
var edad = 1.1; // number
var edad2 = '1'; // string
var casado = false; // boolean
var amigable = null; // object
var existeONo; // undefined TIPO: undefined
var fechaNacimiento = new Date('1989-06-10');

console.log('edad', typeof edad);
console.log('edad2', typeof edad2);
console.log('casado', typeof casado);
console.log('amigable', typeof amigable);
console.log('existeONo', typeof existeONo, existeONo); // undefined
console.log('fechaNacimiento', typeof fechaNacimiento, fechaNacimiento);

// Javascript

var adrian = {
    "nombre": 'Adrian',
    edad: 29,
    hijos: undefined,
    llave: "valor",
};
// adrian.json
var adrianJSON = {
    "llave": "valor", // error
};


console.log(adrian.nombre); // 'Adrian'
console.log(adrian.edad); // 29
console.log(typeof adrian); // object

// NO TIPADO -> no tiene tipos
// var edad = 10;

console.log(10 + 10); // 20

if ('adrian') { // Truthy
  // Si -
} else {
  // No
}

if (1) {
    // Si -
} else {
    // No
}

if (0) { // Falsy
    // Si
} else {
    // No -
}


if ({}) {
    // Si -
} else {
    // No
}

if (null) {
    // Si
} else {
    // No -
}

if (undefined) {
    // Si
} else {
    // No -
}

if (false) {
    // Si
} else {
    // No -
}





// TIPADO -> tipos
// Int edad;
