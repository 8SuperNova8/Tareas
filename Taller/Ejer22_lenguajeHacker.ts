/*Escribe un programa que reciba un texto y transforme lenguaje natural a "lenguaje hacker"
(conocido realmente como "leet" o "1337"). Este lenguaje se caracteriza por sustituir caracteres
alfanuméricos.
- Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) con el alfabeto y los
números en "leet". (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
*/





let abc = [{letra: 'A', conver: '4'},{letra: 'B', conver: 'I3'},{letra: 'C', conver: '['},{letra: 'D', conver: ')'},
                    {letra: 'E', conver: '3'},{letra: 'F', conver: 'I='},{letra: 'G', conver: '&'},{letra: 'H', conver: '#'},
                    {letra: 'I', conver: '[]'},{letra: 'J', conver: ',_|'},{letra: 'K', conver: '>|'},{letra: 'L', conver: '1'},
                    {letra: 'M', conver: '/\\/\\'},{letra: 'N', conver: '^/'},{letra: 'O', conver: '0'},{letra: 'P', conver: '|*'},
                    {letra: 'Q', conver: '(_,)'},{letra: 'R', conver: 'I2'},{letra: 'S', conver: '5'},{letra: 'T', conver: '7'},
                    {letra: 'U', conver: '(_)'},{letra: 'V', conver: '\\/'},{letra: 'W', conver: '\\/\\/'},{letra: 'X', conver: '><'},
                    {letra: 'Y', conver: 'j'},{letra: 'Z', conver: '2'},{letra: '1', conver: 'L'},{letra: '2', conver: 'R'},
                    {letra: '3', conver: 'E'},{letra: '4', conver: 'A'},{letra: '5', conver: 'S'},{letra: '6', conver: 'b'},
                    {letra: '7', conver: 'T'},{letra: '8', conver: 'B'},{letra: '9', conver: 'g'},{letra: '0', conver: '()'},
]

function lenguajeHacker (cadena:string) {
    const stringMayus = cadena.toUpperCase()
    //reemplazar cada letra en el texto
    let newTexto = ''
    for (let i = 0; i < stringMayus.length; i ++) {
        const letra = stringMayus[i]
        // busca un elemento en la lista q cumpla con la funcion especificada
        const conversion = abc.find (obj => obj.letra === letra)?.conver || letra 
        newTexto+= conversion
    }
    return newTexto 
}

let string = 'hola mundo'
console.log (lenguajeHacker(string))

//console.log (abc[22].conver)// asi se accede individual

//se crea un objeto con las equivalencias de abc
/*const  equivalencias : {[key: string]: string}= {};
    abc.forEach(obj => {
        equivalencias[obj.letra] = obj.conver
    })
console.log (equivalencias)*/
