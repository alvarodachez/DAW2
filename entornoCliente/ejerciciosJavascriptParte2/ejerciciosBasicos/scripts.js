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

const teclado = document.getElementById("entrada");

teclado.addEventListener("keydown", () => {
    
    console.log("Has pulsado una tecla")
})

teclado.addEventListener("keyup", (e)=> {
    console.log("Has soltado la tecla "+String.fromCharCode(e.keyCode));
})

