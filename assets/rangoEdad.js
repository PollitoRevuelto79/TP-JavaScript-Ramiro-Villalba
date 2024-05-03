let Edad = parseInt(prompt('Ingrese un número del 0 al 100'));

if (Edad != Number || Edad>100) {
        console.log('Por favor, ingrese un valor adecuado. Ingrese un número del 1 al 100.')}

    else if (Edad === 0) { 
        console.log ('Es un recien nacido.')
    } else {
        if (Edad>0 && Edad<13) {
            console.log('Es un niño.')

        } else {
            if (Edad>12 && Edad<20) {
                console.log ('Es un adolescente.')

            } else {
                if (Edad>=20 && Edad<30) {
                    console.log('Es un adulto joven.')

                } else {
                    if (Edad>29 && Edad<60) {
                        console.log ('Es un adulto promedio.')

                    } else {
                        if (Edad>59) {
                            console.log('Es un adulto mayor.')

                        }
                    }
                }
            }
        }
    }
