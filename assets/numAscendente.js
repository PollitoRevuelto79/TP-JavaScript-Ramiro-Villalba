let numbUno = parseInt(prompt('Ingrese un primer número'));
let numbDos = parseInt(prompt('Ingrese un segundo número'));
let numbTres = parseInt(prompt('Ingrese un tercer número'));


if (isNaN(numbUno) || isNaN(numbDos) || isNaN(numbTres)) {
    console.log ('Por favor, solo ingrese valores númericos.')
} else {
    if (numbUno === numbDos) {
        if (numbUno === numbTres)
        console.log ('Los tres numeros son iguales.')
    } else {
        if (numbUno <= numbDos && numbUno <= numbTres) {
            if (numbDos <= numbTres) {
                console.log(numbUno, numbDos, numbTres);
            } else {
                console.log(numbUno, numbTres, numbDos);
            }
        } else if (numbDos <= numbUno && numbDos <= numbTres) {
            if (numbUno <= numbTres) {
                console.log(numbDos, numbUno, numbTres);
            } else {
                console.log(numbDos, numbTres, numbUno);
            }
        } else {
            if (numbUno <= numbDos) {
                console.log(numbTres, numbUno, numbDos);
            } else {
                console.log(numbTres, numbDos, numbUno);
            }
        }
    }
    
}

