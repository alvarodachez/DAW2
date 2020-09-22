const insertarEmpleado = () =>{


    let dnis = document.getElementsByName("ide");
    
    
    let numero = (dnis.length) + 1;

    let dni = prompt("Introduce el DNI del empleado");

    if(comprobarDNI(dnis,dni) == true){
        alert("El DNI esta repetido");
    }else{
        let nombre = prompt("Introduce el nombre del empleado");
        let apellidos = prompt("Introduce los apellidos del empleado");

        let fila = document.createElement("tr");

        let colNum = document.createElement("td");
        colNum.appendChild(document.createTextNode(numero));

        let colDni = document.createElement("td");
        colDni.setAttribute(name, "ide");
        colDni.appendChild(document.createTextNode(dni));

        let colNombre = document.createElement("td");
        colNombre.appendChild(document.createTextNode(nombre));

        let colApe = document.createElement("td");
        colApe.appendChild(document.createTextNode(apellidos));

        fila.appendChild(colNum);
        fila.appendChild(colDni);
        fila.appendChild(colNombre);
        fila.appendChild(colApe);

        tabla.appendChild(fila);
        
    }



}

const eliminarEmpleado = () =>{
    let dnis = document.getElementsByName("ide");

    let dni = prompt("Introduce el dni del empleado a borrar ");

    let pos = -1;

    let i=0;
    for(let dn of dnis){
        
        if(dn.textContent == dni){
            
            pos = i + 1;
        }
        i++;
    }

    if(pos == -1){
        alert("El empleado no existe");
    }else{
        let tabla = document.getElementById("tabla");
        tabla.deleteRow(pos);

        //tabla.removeChild(document.getElementsByTagName("tr")[pos]);
        //document.getElementsByTagName("tr")[pos].parentNode.removeChild(document.getElementsByTagName("tr")[pos]);
    }

}

    const modificarEmpleado = () =>{
    let dnis = document.getElementsByName("ide");

    let dni = prompt("Introduce el dni del empleado a borrar ");

    let pos = -1;

    let i=0;
    for(let dn of dnis){
        
        if(dn.textContent == dni){
            
            pos = i + 1;
        }
        i++;
    }

    if(pos == -1){
        alert("El empleado no existe");
    }else{
        let tabla = document.getElementById("tabla");
        let newName = prompt("Introduzca el nuevo nombre");
        let newApellido = prompt("Introduzca los nuevos apellidos");
        //tabla.removeChild(document.getElementsByTagName("tr")[pos]);

        let newFila = document.createElement("tr");

        let newNum = document.createElement("td");
        newNum.appendChild(document.createTextNode(document.getElementsByTagName("tr")[pos].getElementsByTagName("td")[0].value));

        let newDNI = document.createElement("td");
        newDNI.appendChild(document.createTextNode(dni));

        let newNombre = document.createElement("td");
        newNombre.appendChild(document.createTextNode(newName));
        
        let newApellidoFila  = document.createElement("td");
        newApellidoFila.appendChild(document.createTextNode(newApellido));

        newFila.appendChild(newNum);
        newFila.appendChild(newDNI);
        newFila.appendChild(newNombre);
        newFila.appendChild(newApellidoFila);

        document.getElementsByTagName("tr")[pos].parentNode.replaceChild(newFila,document.getElementsByTagName("tr")[pos]);
}
}

const comprobarDNI = (dnis,dni) => {

    let bandera = false;

    for(let i of dnis){
        if(i.textContent == dni){
            
            bandera = true;
        }

        console.log(i)

    }

    return bandera;
}

