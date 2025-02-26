// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista_de_Amigos = []


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}




function agregarAmigo() {
    let nombreamigo = document.getElementById('amigo').value;
    if (nombreamigo == "") {
        alert("Ingrese un nombre")
    }else{     
        
        lista_de_Amigos.push(nombreamigo);
        console.log(lista_de_Amigos);
        document.getElementById('amigo').value="";
        document.getElementById('amigo').placeholder = 'agrega otro nombre';
        const nuevoElemento = document.createElement('li');
        // Asignar texto al nuevo elemento
        nuevoElemento.textContent = nombreamigo;
        document.getElementById('listaAmigos').appendChild(nuevoElemento);
        return;
    }
}