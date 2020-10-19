const boton = document.getElementById("post");

boton.addEventListener("click", ()=>{

    const newPost = {
        userId : 10,
        id : 101,
        tittle : "Jacaranda Post",
        body : "Post Description...."
        
        
    }

    fetch("https://jsonplaceholder.typicode.com/posts",{ 
        method: "POST", 
        body: JSON.stringify(newPost),
        headers: {
            "Content-type":"Hola"
        }
        })
        .then(res => res.json())
        .then(data => console.log(data))
})
        