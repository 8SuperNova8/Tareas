// en stack tenermos top que es el superior que es el ultimo elemento ingresado 

class StackElement <T>{ //elemento de la pila
    value : T
    prev : null | StackElement <T>

    constructor(value: T) {
        this.value = value // elemento que se ingresa
        this.prev = null // enlace al anterior
    }
}

class Stack <T>{  //pila 
    top: null | StackElement  <T>
    cont : number

    constructor() {
        this.top = null  // superior
        this.cont = 0 // tamaño
    }
    
    add(value : T): void{// creo el metodo para agregar 
        const newStackElement = new StackElement (value)
        if (this.cont === 0){            
            this.top = newStackElement
        }else{
            const prior = this.top  // anterior
            this.top = newStackElement
            this.top.prev = prior
        }
    this.cont ++
    }

       remove(): T| null{
        if (this.cont >0 && this.top != null){
            const prior  = this.top
            //this.top = prior.prev
            //prior.prev = null
            this.top= this.top.prev
            this.cont --
            return prior.value
        }else {
            return null
        }
        
    }

    valueTop(): T| null{ // devuelve el ultimo valor pero no se elimina
        if (this.top != null)
        return this.top.value
        else {
            return null
        }
    }

    length (): number { // el tamaño de la pila
        return this.cont
    }
}

const firsStack = new Stack()
//console.log (firsStack)
firsStack.add(4)
firsStack.add("soy linda")
firsStack.add(false)
firsStack.add([2,'hi', 11])
console.log (firsStack)
firsStack.remove()
console.log (firsStack)
console.log (firsStack.length())
console.log (firsStack.valueTop())


