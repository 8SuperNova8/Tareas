/*3. Generador de Nombres de Usuario
Para este desafío, crearás un programa que generará un nombre de usuario único a partir de un
nombre y un apellido. Aquí están los requerimientos:- Crea dos variables para almacenar el nombre y el apellido. Estos serán los datos de entrada
para tu programa.
- Genera el nombre de usuario. Un enfoque común para la generación de nombres de usuario
es combinar partes del nombre y el apellido y añadir un número al final. Por ejemplo,
podrías tomar las tres primeras letras del nombre, las tres primeras letras del apellido, y un
número aleatorio para crear un nombre de usuario.
- Imprime el nombre de usuario. Finalmente, imprime el nombre de usuario generado para
mostrar el resultado de tu programa
*/


function generadorUsuario(nombre: string, apellido: string) {
    
    let numAleatorio  = Math.trunc(Math.random()*20)
    return `Usuario:  ${nombre.slice(0,3)+apellido.slice(0,3)+(numAleatorio)}`
}

console.log (generadorUsuario('veronica', 'sierra'))

