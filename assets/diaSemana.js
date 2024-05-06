let dia = parseInt(prompt('Ingrese un numero entre el 1 y el 7'));

if (dia<=7) {
    switch (dia) {
        case 1:
            console.log('Lunes')
            break;
        case 2:
            console.log('Martes')
            break;
        case 3:
            console.log('Miercoles')
            break;
        case 4:
            console.log('Jueves')
            break;
        case 5:
            console.log('Viernes')
            break;
        case 6:
            console.log('Sabado')
            break;
        case 7:
            console.log ('Domingo')
            break;
        default:
            console.log ('El número o caracter ingresado no es valido, pruebe con un numero entre el 1 y el 7')
            break;
    }
}else {
    if (isNaN(dia)){
        console.log('Por favor, ingrese un valor numerico.')
    } else {
    console.log('El número ingresado es mayor a 7, ingrese un número entre el 1 y el 7')
    }
}