/*
7. Validador de Dirección de Correo Electrónico
En este desafío, crearás un programa que valide una dirección de correo electrónico. Aquí están los
requerimientos:
- Crear una variable para almacenar la dirección de correo electrónico. Esta será la dirección
de correo electrónico que tu programa comprobará.
- Comprobar si la dirección de correo electrónico es válida. Para ser válida, una dirección de
correo electrónico debe tener exactamente un símbolo de arroba (@), al menos un punto
después del símbolo de arroba, y al menos un carácter antes del símbolo de arroba y
después del punto. Este es un chequeo básico y no cubre todas las posibilidades de formatos
de correo electrónico válidos, pero servirá para este desafío.
- Imprime un mensaje indicando si la dirección de correo electrónico es válida o no.
*/

function  validacionCorreo( email: string){
    //console.log ('1: ', (email. includes("@") ), '---2: ', (email.slice(email.indexOf('@')).includes('.')), '---3: ', (email.slice(0,email.indexOf('@')).length > 0), '---4: ', ( email.slice(email.indexOf('@') + email.slice(email.indexOf('@')).indexOf('.') +1).length> 0  ))

    if ( (email. includes("@")) &&  // valida si tiene el arroba
     (email.slice(email.indexOf('@')).includes('.'))  &&  // valida si despues del arroba tiene un punto 
      (email.slice(0,email.indexOf('@')).length > 0)  &&  // valida la cantidad de caracteres antes del arroba
      (email.slice(email.indexOf('@')+email.slice(email.indexOf('@')).indexOf('.') +1).length>0) ) {   // valido si hay caracteres despues del punto 
              return true
    }else {
                return false
    }
}

let email1 = "vemas001@hotmail.com"   // true
let email2 = "Bomba@gmail.com"  // true
let email3 = "cura56@hotcom" //false
let email4 = "@hotmail.com" //false
let email5 = "4@outlook.com" //true
let email6 = "corazonhotmail.com" // false


console.log (validacionCorreo(email1))
console.log (validacionCorreo(email2))
console.log (validacionCorreo(email3))
console.log (validacionCorreo(email4))
console.log (validacionCorreo(email5))
console.log (validacionCorreo(email6))









/*
console.log ( email. includes("@")) // valida si tiene el arroba
let indexArroba = email.indexOf('@') // indice de donde esta el arroba
console.log (email.slice(indexArroba).includes('.')) // valida si despues del arroba tiene un punto 
let pPuntoDespuesArrobaIndex = email.slice(indexArroba).indexOf('.') // indice del primer punto despues del arroba
console.log (email.slice(0,indexArroba).length > 0) // valida la cantidad de caracteres antes del arroba  */
//if (email.slice(email.indexOf('@') + email.slice(email.indexOf('@')).indexOf('.') +1).length> 0) { 
 //   console.log ( 'verdadero')}// valido si hay caracteres despues del punto 






