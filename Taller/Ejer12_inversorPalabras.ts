/*12. Inversor de palabras
Tu tarea es escribir un programa que tome una frase ingresada por el usuario y devuelva la misma
frase, pero con todas las palabras invertidas.
Por ejemplo, si la frase es "Hola mundo", el programa debe devolver "aloH odnum".
Nota: El programa debería invertir las palabras individualmente, no la frase entera
*/


const frase = 'Que tal va este año' 

function inversor(frase: string) :String{
    let divide = frase.split (' ') // separa todo lo que este con espacio y retorna una lista
    let newList : string[] = []
    
    for (let item of divide) {
        let word = item.split('').reverse().join('')
        newList.push(word)
    }
   return newList.join (' ')
}

console.log (inversor(frase))