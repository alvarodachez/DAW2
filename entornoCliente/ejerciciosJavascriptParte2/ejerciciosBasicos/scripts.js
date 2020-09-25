
/**
 * EJERCICIO 1
 */
const caja = document.getElementById("box");

caja.addEventListener("mouseenter", () =>{

    caja.className = "box_verde";
});

caja.addEventListener("mouseleave", () =>{

    caja.className = "box";
});

caja.addEventListener("mousedown", () =>{

    console.log("Has pulsado la caja");
})

caja.addEventListener("mouseup", () => {

    console.log("Has soltado el boton izquierdo dentro de la caja");
})

/**
 * EJERCICIO 2
 */
const teclado = document.getElementById("entrada");

teclado.addEventListener("keydown", () => {
    
    console.log("Has pulsado una tecla")
})

teclado.addEventListener("keyup", (e)=> {
    console.log("Has soltado la tecla "+String.fromCharCode(e.keyCode));
})


/**
 * EJERCICIO 3
 */

const boton = document.getElementById("boton");
const entrada2 = document.getElementById("entrada2");

boton.addEventListener("click", ()=>{
    entrada2.addEventListener("keyup",(e)=>{
        console.log(e.key);
    })
})
/**
 * EJERCICIO 4
 */

 const gallery = document.getElementById("galeria");

 gallery.addEventListener("click",(e)=>{
     if(e.target.className == "item_galeria"){
        e.target.className = "item_galeria1";  
     }else{
         e.target.className = "item_galeria";
     }
      console.log(e.target.textContent)
 })

