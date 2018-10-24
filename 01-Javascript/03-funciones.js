function sumarDosNumeros(numeroUno, numeroDos) {
    // validaciones
    var numeroUnoEsNumber = typeof numeroUno == "number"; // true
    var numeroDosEsNumber = typeof numeroDos == "number"; // true
    if (numeroUnoEsNumber && numeroDosEsNumber) {
        return numeroUno + numeroDos;
    } else {
        return 0;
    }
}

// envio otros parametros
console.log(sumarDosNumeros('a', null)); // 0
// no envio parametros
console.log(sumarDosNumeros()); // 0
// envio parametros extra
console.log(sumarDosNumeros(1, 2, 3, 4, 5, 6)); // 3
// envie los parametros correctos
console.log(sumarDosNumeros(2, 3)); // 5

function saludar() {
    console.log('Hola a todos');
}

console.log(saludar()); // undefined -> void
console.log();
sumarNumeros(1, 2, 3, 4, 5, 6, 7);

function sumarNumeros(...parametros) {
    console.log(parametros);
}

sumarNumeros(1, 2, 3, 4);

// "Adrian",     "Hola ADRIAN"
function saludar(nombre, funcionMensajeria) {
    var saludo = `Hola ${nombre.toUpperCase()}`;
    funcionMensajeria(saludo);
    return saludo;
}

saludar("Vicente", function (texto) {
    console.log(texto);
});


/*
function imprimirEnConsola(texto){
    console.log(texto);
}
*/

// var
var variable = 'valor'; // NUNCA MAS

let edad = 29; // Mutar objeto = ...
edad = 30;

const casado = false; // Inmutable
// casado = true;

const edadV2 = 30; // Inmutable
// edadV2 = 31;

const nombre = 'Adrian'; // Inmutable
// nombre = 'Eguez';
nombre.toUpperCase();

const hijos = null;
// hijos = 1;

const mascotas = {};
// mascotas = 1;
mascotas.cachetes = 'Cachetes';
mascotas.numero = 1;
delete mascotas.numero;

const carros = [];
// carros = [];
carros[0] = 123;
carros.push('FINAL');
carros.pop();

// Anonymous Functions

// asignar a variables
const saludarV2 = function () {
    // implementacion
};
saludarV2();

// asignar a metodos de un objeto
const usuario = {
    nombre: 'Adrian',
    saludar: function () {
        return this.nombre
    }
};
usuario.saludar();

// enviar como parametros
saludar("Adrian", function (texto) {
    console.log(texto);
});

// fat arrow functions -> =>

const saludarV3 = () => {
    // implementacion
};
saludarV3();

const usuarioV2 = {
    nombre: 'Vicente',
    saludar: () => {

    }
};

saludar("Adrian", (texto) => {
    console.log(texto);
});

const sumarDosNumerosV2 = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};

const sumarDosNumerosV3 = (n1, n2) => n1 + n2;

const sumarDosNumerosV4 = (n1, n2) =>{
    return  n1 + n2
};

const saludarV5 = saludo => console.log(saludo);

const saludarV6 = saludo => {
    return console.log(saludo)
};











