function juegoAdivinanza() {
    var numSecreto = Math.ceil(Math.random() * 10); // para escojer un ramgo seria  *(max-min +1) +min
    var entradaUsuario;
    var numerosAdivinados = [];
    var cont = 0;
    alert('==========================\nAdivina el Número \nTienes 3 oportunidades para adivinar\n==========================');
    while (cont != 3) {
        entradaUsuario = Number(prompt('Adivina el número: '));
        if (!(numerosAdivinados.includes(entradaUsuario)) && cont++ <= 3) {
            numerosAdivinados.push(entradaUsuario);
            if (entradaUsuario === numSecreto) {
                return alert("-- FELICIDADES --- ".concat(entradaUsuario, " es el n\u00FAmero"));
            }
            else if (entradaUsuario > numSecreto)
                alert("El numero es demasiado alto");
            else {
                alert('El numero es muy pequeño');
            }
        }
        else {
            alert('El numero ya lo habias ingresado intenta de nuevo ');
        }
    }
    alert("Se acabaron tus oportunidades PERDISTE");
}
console.log(juegoAdivinanza());
