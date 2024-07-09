/*
5. Agenda Telefónica
En este desafío, crearás una simple agenda telefónica. Aquí están los requerimientos:
- Crear un objeto para almacenar los contactos de la agenda telefónica. Cada contacto estará
representado por un par de propiedades: el nombre de la persona y su número de teléfono.
- Añadir algunos contactos a la agenda. Cada contacto debe ser añadido como una nueva
propiedad del objeto de la agenda. El nombre de la persona será la clave, y el número de
teléfono será el valor.
- Crea una variable que almacene el nombre de un contacto para buscar.
- Buscar un contacto en la agenda. Si el contacto existe, imprime su número de teléfono. Si no
existe, imprime un mensaje indicando que el contacto no se encontró.
*/

//let numero = Math.floor(Math.random() *(9999999-1000000 + 1)+ 1000000)

let contactos =[ {name : 'laura', number: 2323232, },
                                {name: 'andres', number: 4565738},
                                {name: 'yesica', number: 8374889},
                                {name: 'carolina', number: 4565738},
                                {name: 'pedro', number: 4565738},
                                {name: 'alex', number: 4565738},
                                {name: 'carlos', number: 4565738},
                                {name: 'santiago', number: 4565738},
                                {name: 'erika', number: 4565738},
                                {name: 'felipe', number: 4565738},
]

function addContact (nombre: string, numero: number){
       contactos.push({name: (nombre.toLowerCase()), number: numero})
}

function search(word: string){
    word = word.toLowerCase()
    // ordenar array de objetos  con sort y funcion (a,b) => a.name -b.name) ó  => b.name -a.name)
    let ordenada = contactos.sort((a,b) => a.name.localeCompare (b.name) )
    let puntoFinal = contactos.length
    let puntoInicial = 0
        

    while (puntoInicial < puntoFinal){
        let mid = Math.floor((puntoFinal + puntoInicial)/2)
    
        if (contactos[mid].name === word){
            return contactos[mid]
        }else if (contactos[mid].name > word){
            puntoFinal = mid -1
       }else {
            puntoInicial = mid +1
       }
    }
    return 'no esta en los contactos'
}

addContact('Adriana', 2344556)
addContact('juan', 9867865)
console.log (search ('Yesica'))





