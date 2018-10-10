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
saludar("Vicente",imprimirEnConsola);


function imprimirEnConsola(texto){
    console.log(texto);
}
















