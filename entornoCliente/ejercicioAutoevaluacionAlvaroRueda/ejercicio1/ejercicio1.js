const inicializar = () =>{

    let nombres = [];
    let nombreCheck;
    let bandera = false;
    nombres[0] = prompt("Introduce un nombre");


    for(let i = 1;i<=4;i++){

        do{
            nombreCheck = prompt("Introduce un nombre");

            if(comprobarNombre(nombres,nombreCheck) == false){
                alert("El nombre esta repetido");
            }

            bandera = comprobarNombre(nombres,nombreCheck);

        }while(bandera==false)

        nombres[i] = nombreCheck;

        bandera = false;
        
    }

    let newNombres =pasoMayus(nombres)
    //nombres.sort();

    

    for(let j = 0;j<=4;j++){
        console.log(newNombres[j]);
    }
}

const comprobarNombre = (nombres,nombreIntroducido) => {

    let bandera = true;

    for(let nombre of nombres){
        if (nombreIntroducido == nombre){
            bandera = false;
        }
    }
    return bandera;
}

const pasoMayus = (nombres) =>{
    for (let i= 0;i<nombres.length;i++){

        
        nombres[i] = nombres[i].replace(nombres[i].charAt(0),nombres[i].charAt(0).toUpperCase());
        
    }

    nombres.sort();

    

    return nombres;
}