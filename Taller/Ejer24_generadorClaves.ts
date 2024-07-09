/*Escribe un programa que sea capaz de generar contraseñas de forma aleatoria. Podrás configurar
generar contraseñas con los siguientes parámetros:
- Longitud: Entre 8 y 16.
- Con o sin letras mayúsculas.
- Con o sin números.
- Con o sin símbolos.
(Pudiendo combinar todos estos parámetros entre ellos)
*/

function generadorClave (longitud = 8, incluyeMayus=true , incluyeNums= true, incluyeSimbols = true) {
    const minus = 'abcdefghijklmnopqrstuvwxyz'
    const mayus ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const nums= '1234567890'
    const simbols = "!|#$%&/()=?¡*¨][{}\\@^`~ "
    if (longitud >= 8 ) {

        let opciones = minus // contiene todo lo que piden

        if (incluyeMayus) opciones += mayus
        if (incluyeNums) opciones += nums
        if (incluyeSimbols) opciones += simbols
        let pass = ''
        for (let i = 0 ; i <longitud ; i++) { // vamos armar el pass
            let num = Math.floor(Math.random () * opciones.length )
            pass += opciones[num]
        }
        return pass
    }else {
        return 'La longitud debe estar entre 8 y 16'
    }
}
console.log (generadorClave (7,false, false, true))

