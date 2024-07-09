function acronimo() {
    var cadena = prompt(' Ingrese la frase y cada palabra debe empezar por mayuscula a excepcion de los conectores, como \'por, para, de, del, los... etc\' ');
    var letterMayus;
    if ((cadena === null || cadena === void 0 ? void 0 : cadena.length) != 0) {
        if (cadena.match(/[A-Z]/g) != null) {
            letterMayus = cadena.match(/[A-Z]/g);
            alert(letterMayus.join(''));
            alert('La frase que ingreso no tiene el formato que se pide');
        }
        else {
            alert('La frase que ingreso no tiene el formato que se pide');
        }
    }
    else {
        alert('la cadena esta vacia');
    }
}
console.log(acronimo());
