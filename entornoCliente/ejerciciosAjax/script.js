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
button.addEventListener("click", () =>{
    let xhr;
   
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

   xhr.addEventListener("load",(data)=>{
       
        console.log(JSON.parse(data.target.response))
       createList(JSON.parse(data.target.response));
    })

    xhr.send();
    
     

})

