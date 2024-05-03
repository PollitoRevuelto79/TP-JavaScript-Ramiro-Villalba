let dia = parseInt(prompt('Ingrese un numero entre el 1 y el 7'));

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
    case 7:
        console.log ('Domingo')
    case dia != Number:
        console.log('El caracter ingresado no es valido, por favor ingrese un número')
        break;
    default:
        console.log ('El número ingresado no es valido, pruebe ingresando otro')
        break;
}