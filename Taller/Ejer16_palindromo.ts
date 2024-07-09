/*16. Verificador de palíndromos
Tu misión es crear un programa que solicite al usuario introducir una cadena de texto y luego
compruebe si dicha cadena es un palíndromo. Un palíndromo es una palabra, frase, número o
cualquier otra secuencia de caracteres que se lee igual hacia adelante que hacia atrás, ignorando los
espacios, la puntuación, y las mayúsculas y minúsculas.
Por ejemplo, "Anita lava la tina" es un palíndromo, porque si se lee de izquierda a derecha o de
derecha a izquierda, se obtiene la misma frase (ignorando los espacios y las diferencias entre
mayúsculas y minúsculas).Si la cadena de texto ingresada es un palíndromo, el programa debe imprimir un mensaje que diga
"La cadena de texto es un palíndromo". De lo contrario, debe imprimir "La cadena de texto no es un
palíndromo"
*/

function palindromo(frase:string): boolean {
    let newFrase =  frase.replace(/[\s]/g, '').toLowerCase()
    let cont = 0

    for (let i = newFrase.length-1 ; i >= Math.floor (newFrase.length/2); i--) {
    
         if (newFrase[i] === newFrase[(newFrase.length-1)-i]){
            cont ++
        }
    }
     
    if (cont === Math.floor (newFrase.length/2 +1 ) ) return true
    else {return false}
    
}
console.log (palindromo('Anita lava la tina'))

