const botonPostUser = document.getElementById("postUser");
const botonGetUser = document.getElementById("getUser");

botonPostUser.addEventListener("click", () =>{

    const user ={

        id: 0,
        name: "Alvaro",
        surname: "Rueda Sanchez",
        age: "21",
        dni: "1"
    }

    fetch('http://localhost/jacalix/customers', {
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
})

botonGetUser.addEventListener("click", () => {

    console.log("gfasdasd")
    fetch('http://localhost:8080/jacalix/customers')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
        
    
})