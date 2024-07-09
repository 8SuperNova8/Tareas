/* 
2. Conversor de temperaturas
En este desafío, crearás un programa que pueda convertir grados Celsius a Fahrenheit y viceversa.
Aquí están los requerimientos:
- Crea dos variables para almacenar la temperatura en grados Celsius y Fahrenheit:
- Una variable (por ejemplo, temperaturaCelsius) representará la temperatura en grados
Celsius.
- Otra variable (por ejemplo, temperaturaFahrenheit) representará la temperatura en
grados Fahrenheit.
- Calcula y almacena la conversión de la temperatura:
- Para convertir de Celsius a Fahrenheit, usa la fórmula F = C * 9/5 + 32 y almacena el
resultado en temperaturaFahrenheit.
- Para convertir de Fahrenheit a Celsius, usa la fórmula C = (F - 32) * 5/9 y almacena el
resultado en temperaturaCelsius.
- Imprime las temperaturas convertidas:
- Imprime la temperatura en grados Fahrenheit.
- Imprime la temperatura en grados Celsius.
*/

function conversorTemperatura (tipo: string, grados:number): string {
    let F:number, C:number
    if (tipo === 'F' || tipo === 'f'){
        F= grados
        C = (F-32) * 5/9
        return `${F}° Fahrenheit son ${C}° Celcius`
    }else if  (tipo === 'C' || tipo === 'c'){
        C = grados
        F= C*9/5 +32
        return `${C}° Celcius son ${F}° Fahrenheit`
    } else {
        return (' El tipo de dato no esta bien representado, por favor ingrese : \n F o f para grados Fahrenheit\n C o c para grados Celcius')
    }
}

console.log (conversorTemperatura( "c", -5))