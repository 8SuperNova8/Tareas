
/*
6. Simulador de Lanzamiento de Dados
Para este desafío, vas a crear un programa que simula el lanzamiento de un par de dados. Aquí están
los requerimientos:
- Crear una variable para cada dado. Cada dado puede tener un valor entre 1 y 6, que puedes
generar utilizando una función para obtener números aleatorios.- Lanzar los dados. Para simular el lanzamiento de los dados, asigna a cada variable un
número aleatorio entre 1 y 6.
- Calcula la suma de los valores de los dados.
- Imprime los valores de los dados y su suma. Tu programa debería imprimir un mensaje que
muestre los valores de cada dado y la suma de ambos.
*/


function dados (){
    let d1 = Math.ceil(Math.random() *6)
    let d2 = Math.ceil(Math.random() *6)
    let resul =  ('Dado 1: '+ d1+ '\nDado 2: '+d2+'\nSuma de los dados: '+ (d1+d2))
    return resul
}

console.log (dados())