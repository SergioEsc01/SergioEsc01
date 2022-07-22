
function menorMayor(numeros) {
    // Escribi una función llamada menorMayor que tome como entrada un arreglo de números y devuelva un arreglo 
    // que contenga el menor número del arreglo en la posición cero y el mayor número del arreglo en la posición 1.
    // Ej: menorMayor([4, 6, 1, 7, 15]) // retorna [1, 15]
 min=numeros[0]  
 max=numeros[0]
 var b=[]
for(let i=0;i<numeros.length;i++){
if(numeros[i]<min){
min=numeros[i]

}
if(numeros[i]>max){
max=numeros[i]

}
}
b.push(min)
b.push(max)
  return b
}
console.log(menorMayor([1,8,4,6,10]))

function stringMasLarga(strings) {
    // Escribe una función llamada stringMasLarga, que tome un arreglo de strings llamado 'strings'
    // tu función debe retornar el string más largo que hay en el arreglo
    // Ej:
    // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); // returns 'guten tag'
    // stringMasLarga(['JavaScript', 'HTML', 'CSS']); // returns 'JavaScript'
    max=0
    var cadena
    for(i=0;i<strings.length;i++){
if(strings[i].length>max){
    max=strings[i].length
    cadena=strings[i]
}
}
return cadena
}
console.log(stringMasLarga(["lalalalalalala","lalalalala","lalala"]))
var amigos=[{nombre:"edgar",edad:22},{nombre:"fabri",edad:23},{nombre:"fede",edad:25}]
function buscarAmigo(amigos, nombre) {
    // Escribe una funcion que reciba un array de amigos (objetos) y un nombre (string).
    // Tu función debe devolver el amigo que coincida con el nombre recibido por argumento.
    // Cada amigo tiene las propiedades nombre y edad.
    // Ej:
    //  var amigos = [{ nombre: 'joaco', edad: 33 } , { nombre: 'lucas', edad: 25 }];
    //  buscarAmigo(amigos, 'joaco') // retorna { nombre: 'joaco', edad: 33 };
    var a
    for(i=0;i<amigos.length;i++){
if(nombre===amigos[i].nombre){
return amigos[i]
}
}
    
}
console.log(buscarAmigo(amigos,"fede"))

function sumArray(array, n) {
    // Escribir un algoritmo que, dada un arreglo de números ordenados y un número n, 
    // te devuelva true si alguna combinación de dos números cualesquiera suman n, y devuelva false si ninguna combinación
    // de dos números sumados da como resultado el número n.
    // Ej:
    // sumArray([2,5,7,10,11,15,20], 13)  // retorna true     2+11 suman 13
    // sumArray([2,5,7,10,11,15,20], 14)  // retorna false
    var a=false
    var i=0
    while(i<array.length & a===false){
if(array[0]+array[i+1]===n){
a=true
}else{
    i=i+1
}
    }
    return a
}
console.log(sumArray([2,5,7,10,11,15,20], 14))

var electrodomesticos=[{nombre:"microondas", precio:20000},{nombre:"lavarropas",precio:70000},{nombre:"heladera",precio:100000}]
var b=[]
function pluck(array,propiedad) { 
    // Escribi una función llamada pluck,
    // que recibe un array de objetos (array) y el nombre de una propiedad (propiedad).
    // La función va a devolver un nuevo arreglo con solo los
    // valores dentro de la propiedad recibida, por ejemplo:
    // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    // productos.pluck(productos, 'name') // ['TV LCD', 'Computadora']
    // pista: es una buena oportunidad para usar map.
 let b = array.map(element=>element.nombre)
    return b
 
}
console.log(pluck(electrodomesticos,'nombre'))
