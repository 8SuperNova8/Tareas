/*9. Cifrado César
En este desafío, crearás un programa que implemente el cifrado César, una técnica simple de cifrado
de sustitución en la que cada letra en el texto original es reemplazada por una letra cierto número
de posiciones más adelante en el alfabeto. Aquí están los requerimientos:
- Crear una variable para almacenar el mensaje a cifrar.
- Crear una variable para almacenar el desplazamiento. Este es el número de posiciones que
cada letra del mensaje será desplazada en el alfabeto.
- Cifra el mensaje. Para cada letra del mensaje, encuentra la letra que está desplazada en el
alfabeto y reemplaza la original por ella. Ten en cuenta que debes tratar de manera especial
los espacios y otros caracteres no alfabéticos.
- Imprime el mensaje cifrado
*/

/*
console.log (abc.indexOf('z')) // saca el index de la letra en abc
console.log (abc.includes(string1[2])) //valida si esta en el abc
console.log (typeof(string1[0]))
console.log (abc[5])
*/

let  string1 = "hola muercielago numero 1"

function cifradoCesar(text: string) {
    const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
    text = text.toLowerCase()
    let newString : string[]= []

    for (let i = 0; i< text.length; i++){

        if (abc.includes(text[i]) ) {
            let indexLetraFinal= abc.indexOf(text[i]) +4
            if (indexLetraFinal <= 26) {
                newString.push(abc[indexLetraFinal])
            }else {
                indexLetraFinal = indexLetraFinal -26
                newString.push (abc[indexLetraFinal])
            }
        }else {
            newString.push (text[i])
        }
    }
    return newString.join('')
}

console.log (cifradoCesar(string1))