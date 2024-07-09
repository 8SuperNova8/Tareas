/*
Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado. El
programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien gane
cada punto del juego.
- Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
- Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:15 – Love
30 - Love
30 - 15
30 - 30
40 - 30
Deuce
Ventaja P1
Ha ganado el P1
- Si quieres, puedes controlar errores en la entrada de datos.
- Consulta las reglas del juego si tienes dudas sobre el sistema de puntos. 
*/

function traducirPuntuacion(puntos: number): string {
    switch (puntos) {
        case 0:
            return "Love";
        case 15:
            return "15";
        case 30:
            return "30";
        case 40:
            return "40";
        default:
            return String(puntos);
    }
}

function mostrarPuntuacion(p1: number, p2: number): void {
    console.log(`${traducirPuntuacion(p1)} - ${traducirPuntuacion(p2)}`);
}

function juegoDeTenis(secuencia: string[]): void {
    let p1 = 0;
    let p2 = 0;

    for (const punto of secuencia) {
        if (punto === "P1") {
            p1 += 15;
        } else if (punto === "P2") {
            p2 += 15;
        }

        if (p1 >= 40 && p2 >= 40) {
            if (p1 === p2) {
                console.log("Deuce");
            } else if (Math.abs(p1 - p2) === 10) {
                console.log(`Ventaja ${p1 > p2 ? 'P1' : 'P2'}`);
            }
        } else {
            mostrarPuntuacion(p1, p2);
        }
    }

    if (p1 > p2) {
        console.log("Ha ganado el P1");
    } else if (p2 > p1) {
        console.log("Ha ganado el P2");
    } else {
        console.log("Empate");
    }
}

const secuencia = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"];
juegoDeTenis(secuencia);