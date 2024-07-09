/*19. Encriptador simple
Tu tarea es escribir un programa que solicite al usuario introducir un mensaje y luego encripte este
mensaje cambiando cada letra por la siguiente en el alfabeto. Por ejemplo, 'a' se convierte en 'b', 'b'
se convierte en 'c', etc. Si se encuentra con 'z', debería envolver alrededor y convertirse en 'a'.
Por ejemplo, si el usuario introduce "hola", el programa debería generar el mensaje encriptado
"ipmb".
Considera lo siguiente para tu programa:
- El programa debe manejar tanto letras minúsculas como mayúsculas. Por ejemplo, 'A' se
convierte en 'B'.
- Cualquier caracter que no sea una letra debe mantenerse igual. Por ejemplo, '!' se mantiene
como '!'.- El encriptado debe ignorar los espacios. Por ejemplo, "hola mundo" se convierte en "ipmb
nvoep"
*/

function encriptadorSimple(text: string) {
    const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
    text = text.toLowerCase()
    let newString : string[]= []

    for (let i = 0; i< text.length; i++){

        if (abc.includes(text[i]) ) {  //valida si la letra esta incluida
            let indexLetraFinal= abc.indexOf(text[i]) +1 // me da el index de la posicion de la letra original y le suma 1
            if (indexLetraFinal <= 26) {  
                newString.push(abc[indexLetraFinal]) // agrega la letra si el index no supera la cantidad de letras del abc
            }else {
                indexLetraFinal = indexLetraFinal -26 // si es mayor debe volver a empezar el index 
                newString.push (abc[indexLetraFinal])
            }
        }else {
            newString.push (text[i]) // si la posicion en la frase no es ninguna letra del abc agreguela sin cambios
        }
    }
    return newString.join('')
}

console.log (encriptadorSimple("¡hola mundo!"))