//Dentro del mismo objeto, cree otro metodo que calcule el promedio de un arreglo de numeros. Devuelve el metodo. Array = [1,4,5,6,7,2]
var a={
    promedio:function(arreglo){
        let tot=0
        for(let i=0;i<arreglo.length;i++){
             tot +=arreglo[i]
        }
        console.log(tot/arreglo.length)
    }
}
a.promedio(Array = [1,4,5,6,7,2])