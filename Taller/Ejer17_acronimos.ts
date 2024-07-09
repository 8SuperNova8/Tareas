/*17. Generador de acrónimos
Tu tarea es escribir un programa que solicite al usuario introducir una frase y, a continuación, genere
un acrónimo basado en esas palabras. Un acrónimo es una palabra formada a partir de la inicial o de
las primeras letras de varias palabras, y se utiliza como abreviatura.
Por ejemplo, si el usuario introduce "Organización de Naciones Unidas", el programa debería
generar el acrónimo "ONU".
Ten en cuenta las siguientes consideraciones para tu programa:
- La frase puede ser de cualquier longitud, pero siempre contendrá al menos una palabra.
- Debes asumir que cada palabra está separada por un espacio.
- Los acrónimos deben estar en mayúsculas
*/

function acronimo (){
    let cadena = prompt (' Ingrese la frase y cada palabra debe empezar por mayuscula a excepcion de los conectores, como \'por, para, de, del, los... etc\' ')
    let letterMayus: string [] | null

    if (cadena?.length != 0) {
        if (cadena!.match(/[A-Z]/g) != null){
            letterMayus =  cadena!.match(/[A-Z]/g)
            alert ( letterMayus!.join(''))
            alert ( 'La frase que ingreso no tiene el formato que se pide')
        }else {
            alert ( 'La frase que ingreso no tiene el formato que se pide')
            
        }
    }else { 
        alert ( 'la cadena esta vacia') 
    }
}

console.log (acronimo())