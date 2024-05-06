let numero = parseInt(prompt('Ingrese un número cualquiera.'));

if (!isNaN(numero)) {
    if (numero % 2 === 0) {
        console.log (numero, 'Es un número par.');
    } else {
        console.log (numero, 'Es un número impar.');
    }
} else {
    console.log ('El caracter ingresado no es valido. Por favor, ingrese un número.');
}