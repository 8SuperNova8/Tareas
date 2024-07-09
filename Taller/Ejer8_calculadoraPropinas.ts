/*8. Calculadora de Propinas
En este desafío, vas a crear un programa que calcula cuánto deberías dejar de propina en un
restaurante. Aquí están los requerimientos:
- Crear una variable para almacenar el total de la factura.
- Crear una variable para almacenar el porcentaje de propina que quieres dejar. Esto podría
ser un número fijo (por ejemplo, siempre podrías dejar el 15% de propina), o podrías
ajustarlo dependiendo de la calidad del servicio.
- Calcula la propina. La propina se calcula como factura * porcentaje / 100.
- Imprime la propina. Finalmente, imprime la propina calculada
*/

function valorPropina (valorFactura : number, porcentaje:number ){
    if (porcentaje == null) porcentaje = 15
    const vaPropina = valorFactura * porcentaje/ 100
    return vaPropina
}

function main () {
    let facturaTotal = Number(prompt ('Ingrese el valor de su factura'))
    let porcentaje = Number (prompt ('El valor del porcentaje si no colooca nada se sacará la propina con el 15%'))

    alert (valorPropina (facturaTotal, porcentaje))
}

console.log (main())

