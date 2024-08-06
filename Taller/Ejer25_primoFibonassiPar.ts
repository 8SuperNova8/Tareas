/*
Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
Ejemplos:
- Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
- Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
*/
// determina si el numero es primo
function primo (num: number){ 
    const raiz = Math.floor( Math.sqrt (num))
    let cont = 0
    for (let i = 2; i <= raiz ; i++) {
        if (num%i === 0 ) cont +=1
    }
    if (cont === 0 && num != 1) return true
    else {
        return false
    }
}

function par (num: number) { //determina si el numero es par
    if (num % 2 === 0 ) return true
    return false
}

function numFibonacci (num: number) { //determina si es un numero fibonacci
    //Si una o ambas de las dos formulas es un cuadrado perfecto, entonces x es un número de Fibonacci. 
    //un cuadrado perfecto se identifica calculando la raiz cuadrada del resultado  de la formula y si da un entero es una raiz cuadrada perfecta.
    const formula1 = Math.sqrt((5*(Math.pow(num,2))) +4)
    const formula2 = Math.sqrt((5*(Math.pow(num,2))) -4)
    console.log (formula1,' f2:', formula2)
    if(Number.isInteger(formula1) === true || Number.isInteger(formula2) === true) return true
    return false
}

// calcula si el numero dado es primo, fibonacci y par
function primoFiboPar(num: number){
    return (`${num} ${primo(num)? 'Es primo': 'No es Primo' }, ${par(num)? 'es par': 'es impar'}, ${numFibonacci(num)? ' y es fibonacci': ' y no es fibonacci'}`)
}

console.log (primoFiboPar(7))