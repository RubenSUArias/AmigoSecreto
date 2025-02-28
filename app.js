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
        document.getElementById('amigo').placeholder = 'agrega otro nombre o sortea el amigo secreto';
        const nuevoElemento = document.createElement('li');
        // Asignar texto al nuevo elemento
        nuevoElemento.textContent = nombreamigo;
        document.getElementById('listaAmigos').appendChild(nuevoElemento);
    }
    //for (let i = 0; i <  lista_de_Amigos.length; i++) {
     //   const nuevoElemento = document.createElement('li');
        // Asignar texto al nuevo elemento
      //  nuevoElemento.textContent = lista_de_Amigos[i];
       // document.getElementById('listaAmigos').appendChild(nuevoElemento);
        
    //}

    return;

}


function sortearAmigo(){
    // Obtenemos la lista por su ID
    let lista = document.getElementById('listaAmigos');

    // Obtenemos todos los elementos <li> dentro de la lista
    let elementos = lista.getElementsByTagName('li');
    console.log(elementos.length)

    // Iteramos sobre los elementos y los mostramos en la consola
   // for (let i = 0; i < elementos.length; i++) {
   // console.log(elementos[i].textContent);
   // }Math.floor(Math.random()*elementos.length)
    let numeroGenerado =  Math.floor(Math.random()*elementos.length);
    console.log(numeroGenerado);
    console.log(elementos[numeroGenerado].textContent);

    const nuevoElemento = document.createElement('li');
    // Asignar texto al nuevo elemento
    nuevoElemento.textContent = elementos[numeroGenerado].textContent;
    document.getElementById('resultado').appendChild(nuevoElemento);

}