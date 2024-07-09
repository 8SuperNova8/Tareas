/*
4. Juego de Adivinanzas
En este desafío, vas a crear un simple juego de adivinanzas. Aquí están los requerimientos:
- Genera un número aleatorio entre 1 y 10: Este será el número que el jugador debe adivinar.
- Crea una variable para almacenar la suposición del jugador: Para este desafío, puedes
asignar un valor fijo a esta variable. Sin embargo, en un programa real, probablemente
obtendrías este valor de alguna entrada del usuario.
- Comprueba si la suposición del jugador es correcta:
- Si el jugador adivina el número, imprime un mensaje de felicitación.
- Si la suposición es demasiado alta, imprime un mensaje que indique que la suposición es
demasiado alta.
- Si la suposición es demasiado baja, imprime un mensaje que indique que la suposición es
demasiado baja.
- Permite al jugador tener un máximo de 3 intentos para adivinar el número. Si no adivinan el
número en 3 intentos, informa al jugador que ha perdido y revela el número
*/

function juegoAdivinanza() {
    let numSecreto = Math.ceil(Math.random()*10) // para escojer un ramgo seria  *(max-min +1) +min
    let entradaUsuario :number
    let numerosAdivinados: number[] = []
    let cont = 0
    alert ('==========================\nAdivina el Número \nTienes 3 oportunidades para adivinar\n==========================')
   
    while (cont != 3) {
        entradaUsuario = Number(prompt('Adivina el número: '))
        if  (!(numerosAdivinados.includes(entradaUsuario) )&& cont ++ <= 3){
            numerosAdivinados.push(entradaUsuario)

            if (entradaUsuario === numSecreto){
                return alert(`-- FELICIDADES --- ${entradaUsuario} es el número`)
            }else if (entradaUsuario >  numSecreto)  alert ( `El numero es demasiado alto`)
            else {
                alert ('El numero es muy pequeño')
            }

        } else {
             alert('El numero ya lo habias ingresado intenta de nuevo ')
        }
    }alert( "Se acabaron tus oportunidades PERDISTE")
}

console.log (juegoAdivinanza())