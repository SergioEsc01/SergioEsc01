// item 1
// function obtenermayor(x,y){
//     if(x>y){
//         return x + "es el mas grande"
//     }else if(y>x){
// return y + "es el mas grande"
//     }else if(x===y){
//         return "los numeros son iguales" + x
//     }
// }
// console.log(obtenermayor(9,9))
//item 2
// function es10o5(a){
//     if((a===10 || a===5)){
//         return "true"
//     }else{
//         return "false"
//     }
// }
// console.log(es10o5(5))
//item 3
// function estaenrango(a){
//     if((a<50 && a>20)){
//         return "true"
//     }else{
//         return "false"
//     }
// }
// console.log(estaenrango(40))

//item 4
// function entero(a){
//     if(Number.isInteger(a)){
//         return "true"
//     }else{
//         return "false"
//     }
// }
// console.log(entero(10))
// item 5
// function fiizbuzz(a){
//     if((a % 3 ==0 && a % 5 ==0)){
//     return "fizzbuzz"
// }else if(a % 3 ==0){
//     return "fizz"
// }else if( a% 5 ==0){
//     return "buzz"
// }
// }
// console.log(fiizbuzz(15))
// item6
// function primo(numero) {
//     if(numero == 0 || numero == 1 || numero == 4)
//     return false
//     for (let x = 2; x < numero / 2; x++) {
//         if (numero % x == 0)
//         return false
//     } else {
//         return true
//     }
// }
// console.log(primo(5))
//item 7
// var myarray= ["luis","eeee","aaa"]
// function devolverprim(a){
//     return a[0]
// }
// console.log(devolverprim(myarray))
//item 8
// var myarray= ["luis","eeee","aaa"]
// function devolverult(a){
//     return a.pop()
// }
// console.log(devolverult(myarray))
// item 9
// var myarray=[]
// function incremento(myarray){
// for(let i=0;i < 10;i++){
//     myarray.push(i+1)
// }
// return myarray
// }
// console.log(incremento(myarray))
// item 10
// var arreglo=[1,2,3,4,5]
// function contiene(arreglo,b){
//     var num="hola"
//     for(let i=0;i < arreglo.length;i++){
//         if(arreglo[i]===b){
//            num="true"
//         }
// }  
// if(num==="true"){
//     return num
// }else{
//     return "false"
// }
// }
// console.log(contiene(arreglo,2)) 
// item 11
// var arreglo=[10,8,3,9]
// function promedio(arreglo){
//     let acumulador = 0
//     let promedio = 0
//     for (let i = 0; i < arreglo.length; i++){
//         acumulador = acumulador + arreglo[i]
//     }
//     promedio= acumulador /arreglo.length;
//     return promedio;
//   }
//   console.log(promedio(arreglo))
//item 12

function multiplicacion(a,b){
    if (arguments.length===0){
        return 0
    }
    let prod=1
    for(let i=0;i<arguments.length;i++){
prod *= arguments[i]
    }
    return prod

}
console.log(multiplicacion())