/*14. Verificador de contraseñas
Tu misión es desarrollar un programa que pida al usuario que ingrese una contraseña y verifique si
cumple con los siguientes requisitos:
- La contraseña debe tener al menos 8 caracteres de longitud.
- Debe contener al menos una letra mayúscula.
- Debe contener al menos una letra minúscula.
- Debe contener al menos un número.
Si la contraseña ingresada cumple con todos estos requisitos, el programa debe imprimir un mensaje
que diga "Contraseña válida". Si no cumple con alguno de los requisitos, el programa debe imprimir
un mensaje que indique cuál(es) requisito(s) no se cumplieron
*/


function verificaPass (pass : string) {
    let validacion = 0
    let tics: String[] = []

    if (pass.length < 8 ) tics.push('La clave es muy corta') // valida si tiene menos de 8 caracteres
    else { validacion ++}

    if  (/[A-Z]/.test(pass))  validacion ++ // valida si contiene mayusculas
    else {tics.push ('No contiene mayusculas')}

    if ( /[a-z]/.test(pass)) validacion ++ // valida si tiene minusculas
    else {tics.push ('No contiene minusculas')}

    if (/[0-9]/.test (pass)) validacion ++ // valida si tiene numeros
    else {tics.push('No contiene al menos un numero')}

    if (validacion == 4) return true
    else {return tics.join ('\n')}
    
}

console.log (verificaPass ('calorol8'))