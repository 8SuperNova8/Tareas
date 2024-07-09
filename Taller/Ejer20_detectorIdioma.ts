/*
Tu tarea es escribir un programa que pueda detectar si una palabra ingresada por el usuario es
probable que esté en español o en inglés. Este programa funcionará con base en una suposición muy
simplificada: si una palabra contiene más vocales tildadas (á, é, í, ó, ú), es probable que sea una
palabra en español; si no contiene vocales tildadas, es probable que sea una palabra en inglés.
Para este challenge, asume lo siguiente:
- El usuario introducirá una sola palabra sin espacios.
- El programa debe ser insensible a las mayúsculas y minúsculas. Es decir, debe tratar las
letras 'A' y 'a' de la misma manera.
Por ejemplo, si el usuario introduce "Hello", el programa debería deducir que es una palabra en
inglés. Si el usuario introduce "película", el programa debería deducir que es una palabra en español.
*/

let string  = 'Hello'

function idiomaSpaIng(s: string) {
    let snew = s.toLowerCase() // lo cambia a minuscula
    
    if (snew.match(/[áéíóú]/gi) !== null){ // match funciona sobre el string valida si contiene alguna de estas vocales
        console.log ('El idioma es español')
    }else {
        console.log ('El idioma es Ingles')
    }
}

console.log (idiomaSpaIng(string))