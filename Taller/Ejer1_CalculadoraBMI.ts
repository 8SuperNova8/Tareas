/*1. Calculadora de BMI (Índice de Masa Corporal)
En este desafío, crearás un programa que calcula el Índice de Masa Corporal (BMI, por sus siglas en
inglés) a partir del peso y la altura de una persona. Aquí están los requerimientos:
- Crear dos variables para almacenar el peso (en kilogramos) y la altura (en metros). Estos
serán los datos de entrada para tu programa.
- Calcula el BMI. El BMI se calcula con la fórmula peso / altura^2.
- Imprime el BMI. Finalmente, imprime el BMI calculado.
- Interpreta el BMI. Según los estándares de la Organización Mundial de la Salud, un BMI
menor a 18.5 se considera bajo peso, entre 18.5 y 24.9 se considera normal, entre 25 y 29.9
se considera sobrepeso, y 30 o más se considera obesidad. Imprime un mensaje
correspondiente al rango en el que se encuentra el BMI calculado.
*/

function valorBmi(peso: number , altura : number) :string{
    let bmi=  peso / (altura ** 2)
    
    if (bmi < 18.5)  return (`Su BMI es: ${bmi} Tienes bajo peso`)        
        else if (bmi>=18.5 && bmi <= 24.9) return (`Su BMI es : ${bmi}  Tienes un peso normal`)
            else if (bmi>=25 && bmi <= 29.9) return (`Su BMI es : ${bmi}  Tienes Sobrepeso`)
            else { return `Su BMI es : ${bmi} Tienes Obesidad` }// este es para mayor de 30  
}

console.log (valorBmi(40, 1.50))
