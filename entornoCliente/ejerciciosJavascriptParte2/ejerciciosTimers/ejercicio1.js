const date = new Date();

let fecha = "Hoy es "+date.getDate()+" - "+(date.getMonth()+1)+" - "+date.getFullYear()+" y son las "+date.getHours()
+":"+date.getMinutes()+":"+date.getSeconds()+" horas";

let nodo = document.createTextNode(fecha);

let hoy = document.getElementById("hora");

hoy.appendChild(nodo);



