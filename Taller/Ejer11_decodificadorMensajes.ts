/*
11. Decodificador de mensajes secretos
Tienes una cadena de texto que contiene un mensaje codificado. Cada palabra específica en la
cadena se reemplaza por una palabra codificada. Tu trabajo es escribir un programa que recupere el
mensaje original.
Por ejemplo, considera la cadena "El gato rojo tiene hambre". Cada palabra codificada tiene su
equivalente en una palabra descodificada de la siguiente manera: "gato" debe ser reemplazado por
"agente", "rojo" por "secreto", y "hambre" por "misión".
Debes crear una variable para el mensaje codificado y luego cambiar las palabras codificadas por sus
correspondientes palabras descodificadas para revelar el mensaje original
*/

const frase = 'Hola Mundo, estamos a punto de ir al arbol, con el helado.!'

//words = frase.split(" ") //separar por palabras

function decodificar (frase:string) {
    const secretWords = [{ palabra: 'mundo', secreta : 'guerra'},
        {palabra: 'arbol' , secreta : 'atacar'},
        { palabra: 'helado' , secreta: 'tropa'}]

    let lowerFrase = frase.toLowerCase()
    let reemplace =  /[^\w\s]/g
    let words = lowerFrase.replace( reemplace, '').split(' ') // retira todo lo diferente a palabras y espacio y luego lo convierte a lista
    
    for (let item of words) { // recorre las palabras 
        for (let i = 0; i < secretWords.length ; i++){
            if (item == secretWords[i].palabra){ // valida si esta en las palabras secretas
                let secretW = String(secretWords[i].secreta)
                lowerFrase = lowerFrase.replace (item, secretW)
            }
        }
    }
    return lowerFrase
}

console.log (decodificar (frase))