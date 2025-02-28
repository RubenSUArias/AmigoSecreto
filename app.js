// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista_de_Amigos = []




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

    //generar un numero aleatorio para elegir de entre la lista
    let numeroGenerado =  Math.floor(Math.random()*elementos.length);
    console.log(numeroGenerado);
    console.log(elementos[numeroGenerado].textContent);
    //Darle formato para escribir el elemento en pantalla

    const nuevoElemento = document.createElement('li');
    // Asignar texto al nuevo elemento
    nuevoElemento.textContent = `El amigo secreto es: ${elementos[numeroGenerado].textContent}`;

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    
    document.getElementById('resultado').appendChild(nuevoElemento);

}