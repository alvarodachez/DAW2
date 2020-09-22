let provincias = [];
provincias [0] = "Sevilla";
provincias [1] = "Cadiz";
provincias [2] = "Huelva";
provincias [3] = "Malaga";
provincias [4] = "Granada";
provincias [5] = "Almeria";
provincias [6] = "Jaen";
provincias [7] = "Cordoba";

const provinciasAlfabeticamente = () => {
    provincias.sort();
    document.write('<table border = "1"><tr>');
    let i = 0;

    for(i;i<=7;i++){
        document.write('<tr><td>'+provincias[i]+'</td>');
    }

    document.write('</tr></table>');
}