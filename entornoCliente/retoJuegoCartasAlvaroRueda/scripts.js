/**
 * DECLARACION DE VARIABLES
 */
let palos = new Array("Oros","Bastos","Copas","Espadas"); 
let cartas = new Array(11);
let puntoJugador = 0;
let puntoBanca = 0;
let puntoActual = 0;
let cartaAux;
let block = false;

//creo un array multidimensional
for(let i = 1;i<=10;i++){
    cartas[i] = palos;
}

/**
 * FUNCION JUGADOR
 */

 let sacarCarta = document.getElementById("elegirCarta");

    
 sacarCarta.addEventListener("click",()=>{

    if(block == false){
        //saco numero de carta aleatoriamente del 1 al 10
        let numeroCarta = parseInt((Math.random()*10)+1);
        //saco el palo con numero aleatorio del 1 al 4
        let palo = parseInt(Math.random()*4);
        
        //obtengo la carta con su numero y la con la posicion del array multidimensional su palo
        let carta = numeroCarta + cartas[numeroCarta][palo];
    

        //bucle para que nos saque carta repetida guardandolas en variables auxiliares
        while(cartaAux == carta){

            numeroCarta = parseInt((Math.random()*10)+1);
            palo = parseInt(Math.random()*4);
    
            carta = numeroCarta + cartas[numeroCarta][palo];
        }


        cartaAux = carta;

        mostrarCarta(carta);

        if(numeroCarta <=7){
            puntoActual = puntoActual + numeroCarta;
        }else{
            puntoActual =puntoActual + 0.5; 
            }   

        puntoJugador =  puntoActual;


        document.getElementById("puntosJugador").value = puntoJugador;
        let cartaAdd = document.createElement("img");
        cartaAdd.src="img/"+carta+".jpg";
        document.getElementById("almacenJugador").appendChild(cartaAdd);

        if(puntoJugador > 7.5){
            bloquear();
            document.getElementById("veredicto").value = "HAS PERDIDO";
        }else if(puntoJugador == 7.5){
            puntoActual = 0;
            banca();
        }
    }
    

 });

 /**
  * FUNCION PLANTARSE
  */
let mePlanto = document.getElementById("plantar");

mePlanto.addEventListener("click",() =>{
    //lo pongo a 0 para poder usarlo en banca()
    puntoActual = 0;
    bloquear();
    banca();
})
/**
 * FUNCION JUEGA LA BANCA
 */
const banca = () =>{
    
    let numeroCarta = parseInt((Math.random()*10)+1);
    let palo = parseInt(Math.random()*4);
    
    let carta = numeroCarta + cartas[numeroCarta][palo];
    

    while(cartaAux == carta){

         numeroCarta = parseInt((Math.random()*10)+1);
         palo = parseInt(Math.random()*4);
    
         carta = numeroCarta + cartas[numeroCarta][palo];
    }


    cartaAux = carta;

    mostrarCartaBanca(carta);

    if(numeroCarta <=7){
        puntoActual = puntoActual + numeroCarta;
    }else{
        puntoActual = puntoActual + 0.5; 
    }

    puntoBanca =  puntoActual;


    document.getElementById("puntosBanca").value = puntoBanca;
    let cartaAdd = document.createElement("img");
    cartaAdd.src="img/"+carta+".jpg";
    document.getElementById("almacenBanca").appendChild(cartaAdd);

    //se repite la funcion banca mientras no pierda nadie y tarda un segundo en hacerlo
    if(puntoActual<=puntoJugador){
        setTimeout("banca()",1000);
    }
    if(puntoBanca > 7.5){
        document.getElementById("veredicto").value = "HAS GANADO";
    }else if(puntoBanca == 7.5 && puntoJugador==7.5){
        document.getElementById("veredicto").value = "HAS PERDIDO";
    }else if(puntoBanca == 7.5){
        document.getElementById("veredicto").value = "HAS PERDIDO";

    }else{
        ganar();
    }
}
/**
 * FUNCION SACAR CARTA
 * @param {*} card 
 */
 const mostrarCarta = (card) =>{

    document.getElementById("mano").src ="img/"+card+".jpg";
    document.getElementById("mano").style.visibility="visible"
 }
 const mostrarCartaBanca = (card) =>{

    document.getElementById("manoBanca").src ="img/"+card+".jpg";
    document.getElementById("manoBanca").style.visibility="visible"
 }

 /**
  * FUNCION VEREDICTO
  */
const ganar = () =>{
    if(puntoBanca>puntoJugador){
        document.getElementById("veredicto").value = "HAS PERDIDO";

    }
}

const bloquear = ()=>{
    block = true;

    }



/**
 * FUNCION REINICIAR
 */
let reinicio = document.getElementById("reiniciar");

reinicio.addEventListener("click", ()=>{
    location.reload();
})
  
 


