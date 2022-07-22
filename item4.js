//ej 1
// function crearg(nom,ed){
// var gato = {
//     nombre:nom,
//     edad:ed
// }
//     return gato
// }
// console.log(crearg("michi",2))
//item2
// var car={
//     marca:"fia",
//     modelo:222,
//     ddd:"ss"
// }
// function agpror(objeto,property){
// objeto[property]=null
// }
// console.log(agpror(car,"lala"))   //** No lo entendi**/
//item3

// function mult(objetoMisterioso){
//     return resultado= objetoMisterioso.numeroMisterioso*5
// }
// console.log(mult({numeroMisterioso: 5}))
//item4
// function nuevousuario(nom,email,password){
// var user={
// nom,
// email,
// password
// }
//     return user
// }

//item5
// var usuario={
//     aaa:"aaa",
//     email,
//     ccc:"eee"
// }
// function tieneemail(usuario){
// if(usuario.email !==undefined){
// return true
// }else{
//     return false
// }
// return usuario.email !== undefined ?true : false
// }
// console.log(tieneemail(usuario))
//item 6
// function tieneprop(obj,prop){
// return obj.hasOwnProperty(prop)
// }
// console.log(tieneprop(a={aaa,bb,cc},aaa))
//item 7
// var usuarios = [

//     {
//         nombre: "Joaquin",
//         apellido: "Quiroga",
//         contraseña: "4561gagsg",
//         esPremium: false
//     },
//     {
//         nombre: "Ester",
//         apellido: "Molina",
//         contraseña: "2222/",
//         esPremium: true
//     },
//     {
//         nombre: "Adolfo",
//         apellido: "Quiroga",
//         contraseña: "xcgbe342",
//         esPremium: false
//     },
//     {
//         nombre: "Rodolfo",
//         apellido: "Perez",
//         contraseña: "piuo7876",
//         esPremium: true
//     },
    
//     ]
//     function pasaruser(usuarios){
//         for(let i=0;i<usuarios.length;i++){
//             if(usuarios[i].esPremium===false){
//              usuarios[i].esPremium=true 
//             }
//         }
//         return usuarios
//     }
//     console.log(pasaruser(usuarios))
//item 7
// var usuarios = [

//     {
//         nombre: "Joaquin",
//         apellido: "Quiroga",
//         contraseña: "4561gagsg",
//         esPremium: false
//     },
//     {
//         nombre: "Ester",
//         apellido: "Molina",
//         contraseña: "2222/",
//         esPremium: true
//     },
//     {
//         nombre: "Adolfo",
//         apellido: "Quiroga",
//         contraseña: "xcgbe342",
//         esPremium: false
//     },
//     {
//         nombre: "Rodolfo",
//         apellido: "Perez",
//         contraseña: "piuo7876",
//         esPremium: true
//     },
    
//     ]
// function actualizarPassword(usuario, nuevaPassword){
//     for(let i=0;i<usuario.length;i++){
// usuario[i].contraseña=nuevaPassword;
//     }
//     return usuario
// }
// console.log(actualizarPassword(usuarios,42314134))
//item 8
// var usuarios={
//     aaa:"aa",
//    amigos:["a","b","c"],
// }
// function agregarAmigo(usuario, nuevoAmigo){
// usuario.amigos.push(nuevoAmigo)
// return usuario
// }

// console.log(agregarAmigo(usuarios,"fernando"))
//item 9
// var usuarios = [

//     {
    
//     nombre: "Joaquin",
    
//     apellido: "Quiroga",
    
//     contraseña: "4561gagsg",
    
//     esPremium: false
    
//     },
    
//     {
    
//     nombre: "Ester",
    
//     apellido: "Molina",
    
//     contraseña: "2222/",
    
//     esPremium: true
    
//     },
    
//     ]
// function pasarUsuarioAPremium(a){
//     for(let i=0;i<a.length;i++){
//         a[i].esPremium=true
//     }
// return a
// }
// console.log(pasarUsuarioAPremium(usuarios))
//item10
// var usuarios = [

//     {
    
//     nombre: "Joaquin",
    
//     apellido: "Quiroga",
    
//     esPremium: false,
    
//     posts: [
    
//     {Dislikes: 155,Likes: 566,Rettweets: 677,},
    
//     {Dislikes: 11,Likes: 897,Rettweets: 2,},]
    
//     },
    
//     {nombre: "Ester",apellido: "Molina",contraseña: "2222/",esPremium: true
    
//     },
    
//     ]
// function sumarLikesDeUsuario(a){
//     var tot=0
// for(let i=0;i<a.length;i++){
//    tot +=a[0].posts[i].Likes
// }
// return tot
// }
// console.log(sumarLikesDeUsuario(usuarios))