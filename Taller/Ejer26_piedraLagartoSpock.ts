/*
Crea un programa que calcule quien gana más partidas al piedra, papel, tijera, lagarto, spock.
- El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
- La función recibe un listado que contiene pares, representando cada jugada.
- El par puede contener combinaciones de " " (piedra), " " (papel), " " (tijera), " " (lagarto)
o " " (spock).- Ejemplo. Entrada: [(" "," "), (" "," "), (" "," ")]. Resultado: "Player 2".
- Debes buscar información sobre cómo se juega con estas 5 posibilidades
*/

type Juego = { [key: string]: string[] };

let juego= [
    { tijera: ['papel', 'lagarto'] },
    { papel: ['piedra', 'spock'] },
    { piedra: ['tijera', 'lagarto'] },
    { lagarto: ['papel', 'spock'] },
    { spock: ['tijera', 'piedra'] },
];

//let puntaje: [string, string][] = [['tijera', 'papel']];

function pptls (array: string[][]) {
    let j1 = 0
    let j2 =0
    let valorj1 = ''
    
    for (let i =0; i <array.length ; i++) {
        valorj1 = puntaje[i][0]; // guarda la seleccion del jugador 1

        // Encuentra el objeto que contiene la propiedad `valorj1`
        let contiene = juego.find(obj => obj.hasOwnProperty(valorj1)) as Juego | undefined;

        //valida que `contiene` no sea undefined y que tenga la propiedad `valorj1`
        if (contiene && contiene[valorj1] ) {
            if (valorj1 == puntaje[i][1] ) continue
            else if (contiene[valorj1].includes(puntaje[i][1]))  j1 ++
            else {
                 j2++
            }
        }
    }
    console.log ('j1',j1, 'j2',j2)
    if (j1 == j2) return 'Es un Empate'
    else if (j1 > j2) return 'Gana el jugador 1'
    else {
        return 'Gana el jugador 2'
    }
}

const puntaje = [['papel','papel'],['tijera','spock'], ['lagarto', 'lagarto'],['piedra', 'lagarto']]
console.log (pptls(puntaje))