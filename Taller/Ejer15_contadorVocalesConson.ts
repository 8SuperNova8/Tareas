/*const regex = /[aeiou]/gi
let palabra = 'Holas cositAs'
console.log (palabra.match(regex))  */

/*Tu tarea consiste en desarrollar un programa que solicite al usuario introducir una cadena de texto.
Posteriormente, el programa debe contar el número de vocales y consonantes presentes en la
cadena de texto proporcionada.
Ten en cuenta lo siguiente:
- El programa no debe ser sensible a las mayúsculas y minúsculas. Es decir, debe contar 'a' y
'A' como la misma vocal, y de manera similar para las consonantes.
- Por simplicidad, puedes asumir que la cadena de texto solo contendrá letras del alfabeto
inglés y espacios, no se incluirán números, signos de puntuación u otros caracteres
especiales.
*/


function contadorVolcalsConst (contenido: string): string{
    let vocals : number = 0
    let consonant : number = 0

    if (contenido.match(/[aeiouáéíóú]/gi) !== null) { // estamos diciendo q si el contenido en match es diferente a null
        vocals = contenido.match(/[aeiouáéíóú]/gi)!.length // usamos ! para indicar que no será null
    }
    if (contenido.match(/[bcdfghjklmnñpqrstvwxyz]/gi) !== null) {
        consonant = contenido.match(/[bcdfghjklmnñpqrstvwxyz]/gi)!.length // usamos ! para indicar que no será null
        console.log (consonant,' si soy yo') 
        }
     
    return `Vocales:  ${vocals}\nConsonantes:  ${consonant}`
}


console.log (contadorVolcalsConst('Condecoración'))