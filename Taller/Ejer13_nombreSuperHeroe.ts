/*Tu objetivo es desarrollar un programa que reciba dos entradas del usuario: su nombre y su animal
favorito. El programa deberá combinar estas dos entradas para crear y mostrar un nombre de
superhéroe único.
Por ejemplo, si el usuario introduce "Juan" como nombre y "águila" como su animal favorito, el
programa deberá imprimir "Águila Juan" como el nombre de superhéroe.
Ten en cuenta que el nombre del animal debe ir primero y deberá comenzar con una mayúscula,
seguido del nombre del usuario
*/

const name1 = 'pedro'
const animal = 'lobo'

function nameAnimal (name : string, animal : string) {
    let superHeroe =  (animal.charAt(0).toUpperCase() + animal.slice(1) ) + ' ' + (name.charAt(0).toUpperCase () + name.slice (1)) //animal.slice(1) = trae todas las letras despues de la posicion 1
     return superHeroe

}

console.log (nameAnimal (name1, animal))

