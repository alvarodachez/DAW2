const añadirElemento = () =>{

    //Obtenemos los datos de los inputs
    let posicion = document.getElementById("posicion").value;
    let equipo = document.getElementById("equipo").value;
    let puntos = document.getElementById("puntos").value;

    //Obtener la tabla 
    let tabla = document.getElementById("tabla");

    //Array de las filas con EQUIPOS para saber su longitud
    let filas = [] = document.getElementsByClassName("pos");

    let newFila = document.createElement("tr")
    
    //Creamos nodos y añadimos el texto a los nodos
    let newPos = document.createElement("td");
    newPos.appendChild(document.createTextNode(parseInt(posicion)));
    let newEquipo = document.createElement("td");
    newEquipo.appendChild(document.createTextNode(equipo));
    let newPuntos = document.createElement("td");
    newPuntos.appendChild(document.createTextNode(puntos));

    newFila.appendChild(newPos);
    newFila.appendChild(newEquipo);
    newFila.appendChild(newPuntos);

    
    //Si la posicion para añadir no hay que sustituir
    if (posicion > filas.length){
        
        tabla.appendChild(newFila);
        //si hay que sustituir
    }else{
        oldRow = tabla.getElementsByTagName("tr")[parseInt(posicion)];

        oldRow.parentNode.replaceChild(newFila,oldRow);

      

    }


}