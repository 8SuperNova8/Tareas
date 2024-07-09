const lenguaje = [{A: '4' }, {B: 'I3'}, {C: '[' }, {D: ')'},
                                     {E: '3' }, {F: 'I='}, {'G': '&' }, {'H': '#'}
]

const cadena = 'ABC'

console.log (lenguaje[6].B)

// para saber si tiene la G
const objetoG = lenguaje.find(obj => 'G' in obj);
console.log(objetoG); // { 'G': '&' } o undefined si no se encuentra
//otro metodo
const contieneG = lenguaje.some(obj => 'G' in obj);
console.log(contieneG); // true o false

console.log ('------------------------------')
// obtener el valor de H
const objetoH = lenguaje.find(obj => 'A' in obj);

if (objetoH) {
  // Obtener el valor asociado con la letra "H"
  const valorH = Object.values(objetoH)[0];
  console.log("Valor de H:", valorH);
} else {
  console.log("La letra 'H' no está en la lista de objetos");
}
