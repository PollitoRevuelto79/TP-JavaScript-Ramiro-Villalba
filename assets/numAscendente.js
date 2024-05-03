let numbUno = parseInt(prompt('Ingresa un primer número.'));
let numbDos = parseInt(prompt('Ingresa un segundo número.'));
let numbTres = parseInt(prompt('Ingresa un tercer número.'));

if (numbUno>numbDos && numbUno>numbTres) {
    if (numbDos>numbTres)
        console.log(numbUno,numbDos,numbTres)
} else if (numbDos>numbUno && numbDos>numbTres) {
    if (numbUno>numbTres)
        console.log(numbDos,numbUno,numbTres)
} else if (numbTres>numbUno && numbTres>numbDos) {
    if (numbUno>numbDos)
        console.log(numbTres,numbUno,numbDos)
}