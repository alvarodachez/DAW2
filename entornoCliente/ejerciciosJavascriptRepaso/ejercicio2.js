const añadirElemento = () => {

    //Creamos un nuevo elemento "li"
    let nuevoElementoLista = document.createElement("li");
    //Obtenemos el valor del input elemento
    let nuevoElemento = document.getElementById("elemento").value;
    //Obtenemos el valor del input posicion
    let posicion = document.getElementById("posicion").value;
    
    //Obtenemos el ul
    let lista = document.getElementById("lista");

    //Obtenemos el nodo de referencia para insertar el nodo nuevo antes que este
    let referencia = document.getElementsByTagName("li")[posicion-1];

    //Añadimos el nuevo texto al nuevo li
    nuevoElementoLista.appendChild(document.createTextNode(nuevoElemento));

    //Insertamos el nuevo nodo antes que el de referencia
    lista.insertBefore(nuevoElementoLista,referencia);

}

const borrarElemento = () =>{
    let lista = document.getElementById("lista");
    
    let posicion = document.getElementById("posicion").value;

    let itemToRemove = document.getElementsByTagName("li")[posicion-1];

    lista.removeChild(itemToRemove);
}