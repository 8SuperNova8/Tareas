/*18. Análisis de mensajes de texto
Tu tarea es escribir un programa que solicite al usuario introducir un mensaje de texto y, a
continuación, genere un análisis de dicho mensaje. El análisis debe incluir:
- La cantidad de caracteres en el mensaje, incluyendo espacios y signos de puntuación.
- La cantidad de palabras en el mensaje. Puedes asumir que las palabras están separadas por
espacios.
- La cantidad de oraciones en el mensaje. Puedes asumir que las oraciones terminan con un
punto, un signo de interrogación o un signo de exclamación.
Por ejemplo, si el usuario introduce "¡Hola, mundo! ¿Cómo estás?", el programa debería informar
que el mensaje tiene 29 caracteres, 5 palabras y 2 oraciones
*/

//cantidad de caracteres incluyendo especiales y espacios
//let hola  = '"¡Hola, mundo! ¿Cómo estás?"'
//console.log (hola.length)
//let regex = hola.match(/[a-zA-ZÀ-ÿ\u00f1\u00d1]+/g)?.length// indica cuantas palabras tiene incluyendo las tildes
//console.log (regex)
//let oraciones = /[^.!?]+[.!?]/g // trae hasta donde encuentra el punto. signo de interrogacion o admiración  
//console.log (hola.match(oraciones))



function pluralSincgular (valor: number, singular : string, plural : string) {
    if (valor === 1) {
        return `${valor} ${singular}`
    }else {
        return `${valor} ${plural}`
    }
}

function analisisTexto (cadena: string) {
    let caracteres : number , palabras: number,  oraciones : number = 0
    if (cadena.length != 0) {
        caracteres = cadena.length
        palabras = cadena.match(/[a-zA-ZÀ-ÿ\u00f1\u00d1]+/g)!.length
        
        if ( cadena.match(/[^.!?]+[.!?]/g) != null) {
            oraciones = cadena.match(/[^.!?]+[.!?]/g)!.length
        }else {
            if (palabras > 1)  oraciones = 1
            else {oraciones = 0}
        }
        return `${pluralSincgular(caracteres, 'caracter', 'caracteres')} ${pluralSincgular(palabras, 'palabra', 'palabras')} ${pluralSincgular(oraciones, 'oración', 'oraciones')}`
    } else {
        return "La entrada esta vacia"
    }
}

console.log (analisisTexto('"¡Hola, mundo! ¿Cómo estás? "'))
console.log (analisisTexto('¡Hola'))
    



