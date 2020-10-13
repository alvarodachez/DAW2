const button = document.getElementById("boton");
const usuarios = document.getElementById("usuarios");

const createList = (jsonObj) =>{
   
    let lista  = document.createElement("ul")

    for(usuario of jsonObj){
        let elemento = document.createElement("li");
        text = document.createTextNode(usuario.id+" - "+usuario.name)
        elemento.appendChild(text);
        lista.appendChild(elemento);
    }
   
    usuarios.appendChild(lista);

}

button.addEventListener("click", ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => createList(res))
})