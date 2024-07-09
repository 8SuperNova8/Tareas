/*10. Validador de tarjetas de crédito.
En este desafío, vas a crear un validador de tarjetas de crédito utilizando el algoritmo de Luhn,
también conocido como "fórmula de módulo 10". Esta es una fórmula sencilla utilizada para validar
varios números de identificación; las tarjetas de crédito y débito son un ejemplo común. Aquí están
los requerimientos:
- Crear una función que acepte un número de tarjeta de crédito: Esta función deberá
convertir el número a un array de dígitos.
- Implementar el algoritmo de Luhn:
- Comenzando por el segundo dígito desde la derecha, duplica cada segundo dígito.
- Si el doble de un dígito resulta ser un número de dos dígitos, suma esos dos dígitos para
obtener un número de un solo dígito.
- Suma todos los dígitos.
- Si la suma total termina en 0 (es decir, es divisible por 10), entonces el número es válido.
- Probar la función: Prueba la función con varios números de tarjetas de crédito para
asegurarte de que funciona correctamente. Recuerda usar solo números de tarjetas de
crédito de ejemplo, nunca uses números de tarjetas de crédito reales para estas pruebas */


let num =   '5412 7512 3412 3456'

'1422552264226416'
function validadorTarjeta(tarjeta: string) {
    tarjeta = tarjeta.replace(/ /gi, '') // quita los espacios si los llega a tener 
    
    for (let i = tarjeta.length -2; i >=0 ; i -= 2){ // modifica la tarjeta sumando las posiciones pares de derecha a izquierda
        let suma = Number (tarjeta[i]) *2
                
        if (suma > 9)  suma = (Math.floor(suma/10)) + (suma %10)
            
        tarjeta  = tarjeta.slice(0,i) + suma + tarjeta.slice(i+1) // modifica la tarjeta con el numero numero
    }
    let sumatotal = 0
    for (let i = 0; i < tarjeta.length; i++){ // suma el valor de los numeros de la tarjeta
        sumatotal = sumatotal + Number(tarjeta[i]) 
    }
    
    if (sumatotal % 10 == 0 ) return true // si termina en 0 si es valida la tarjeta
    else { return false}
}

console.log (validadorTarjeta(num))