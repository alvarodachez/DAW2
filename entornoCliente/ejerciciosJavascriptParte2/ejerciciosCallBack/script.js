const users = [  
    {id:0, name:"Alvaro"}, 
    {id:1, name:"Mara"}, 
    {id:2, name:"Alejandro"}
];

const getUser = (id,cb) =>{
    const user = users.find(user=> user.id == id);
    if(!user){
        cb("No existe usuario con el id "+id)
    }else{
        cb(null,user);
    }
}

getUser(3,(err,user) => {
    if(err){
        return console.log(err);
    }
        console.log(user.name);
    
})
