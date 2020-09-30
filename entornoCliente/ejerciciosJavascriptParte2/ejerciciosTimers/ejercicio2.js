let horaAlarma = prompt("¿A que hora quieres levantarte? (HH:MM:SS)");

let h = 0;
let m = 0;
let s = 0;

const alarma = () =>{
    setInterval(() => {
        alert("DESPIERTAAAAAAAAA")
    }, 115000);
}
const sacarHora = () =>{

    h = horaAlarma.charAt(0)+horaAlarma.charAt(1);
    m = horaAlarma.charAt(3)+horaAlarma.charAt(4);
    s = horaAlarma.charAt(6)+horaAlarma.charAt(7);

    console.log(h+m+s);
}
const RELOJ = () => {
    const DATE = new Date();
    hora = DATE.getHours();
    minutos = DATE.getMinutes();
    segundos = DATE.getSeconds();

    if(hora == h && minutos == m && s ==segundos){
        let decision = prompt("¿Quieres seguir descansando? Le avisaremos cada dos minutos (S/N)");

        if(decision == "S"){
            alarma();
        }
    }
    return (
        reloj.textContent = 
        `${(hora)}:${(minutos)}:${(segundos)}`
    );
}
sacarHora();

const HORA = () => {
    const reloj = document.getElementById("reloj");

    
    let hora, minutos, segundos;

    RELOJ();
    
    return setInterval(RELOJ, 1000);
}


 document.addEventListener("DOMContentLoaded", HORA);
