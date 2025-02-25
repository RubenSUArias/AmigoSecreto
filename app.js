// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []

//Agrega los elementos a la lista onclick
function agregarAmigo() {
    let nombreamigo = document.getElementById('amigo').value;
    
    listaAmigos.push(nombreamigo);
    console.log(listaAmigos);
 
    return;
}