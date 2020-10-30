/**
 * DECLARACION DE CONSTANTES
 */
const botonPostProduct = document.getElementById("postProduct");
const botonGetProduct = document.getElementById("getProduct");
const botonUpdateProduct = document.getElementById("updateProduct");
const listado = document.getElementById("listar");
/**
 * 
 * FUNCION PARA LISTAR LOS PRODUCTOS RECIBIENDO UN JSON DE LA PETICION A BACKEND
 * @param {*} res 
 */
const listarProductos = () =>{

    let tabla = document.getElementById("productos");

    let cuerpoAntiguo = document.getElementById("cuerpo");

    let longitudStorage = sessionStorage.length;

    let cuerpoTabla = document.createElement("tbody");
    cuerpoTabla.setAttribute("id","cuerpo");

    for(let i = 1; i<=longitudStorage;i++){
        /**
         * CREACION DE LOS NUEVOS ELEMENTOS PARA AÑADIRLOS A LA TABLA
         */
        let fila = document.createElement("tr");
        let colid = document.createElement("td");
        let colnombre = document.createElement("td");
        let coldes = document.createElement("td");
        let colrent = document.createElement("td");
        let colcat = document.createElement("td");
        /**
         * OBTENIENDO INFORMACION DEL JSON
         */
         let resultado = sessionStorage.getItem(i);
         
         res = JSON.parse(resultado);

        let idtext = document.createTextNode(i);
        let nombretext = document.createTextNode(res.name);
        let destext = document.createTextNode(res.description);
        let renttext = document.createTextNode(res.rent);
        let cattext = document.createTextNode(res.cat);

        colid.appendChild(idtext);
        colnombre.appendChild(nombretext);
        coldes.appendChild(destext);
        colrent.appendChild(renttext);
        colcat.appendChild(cattext);

        fila.appendChild(colid);
        fila.appendChild(colnombre);
        fila.appendChild(coldes);
        fila.appendChild(colrent);
        fila.appendChild(colcat);

        cuerpoTabla.appendChild(fila);
    }
    /**
     * REEMPLAZAMOS EL QUE YA TENEMOS EN EL HTML PARA QUE NO SE ACUMULEN OBJETOS REPETIDOS EN LA TABLA
     */
    tabla.replaceChild(cuerpoTabla,cuerpoAntiguo);
    }

const clearFormulario = ()=>{
    let productid = document.getElementById("id")
    let productname = document.getElementById("name");
    let productdescription = document.getElementById("description");


    
        productid.value="";
        productname.value = "";
        productdescription.value = "";
        
}
/**
 * BOTON PARA REALIZAR LA PETICION POST AL BACKEND. RECOGE LOS CAMPOS DEL FORMULARIO Y LO PASAMOS A LA PETICION EN FORMATO JSON
 */
botonPostProduct.addEventListener("click", () =>{

    let productid = document.getElementById("id").value;
    let productname = document.getElementById("name").value;
    let productdescription = document.getElementById("description").value;
    let seleccionRent = document.getElementById("sub").value;
    let seleccionCat = document.getElementById("category").value;
    const product ={

        name: productname,
        description: productdescription,
        rent: seleccionRent,
        cat: seleccionCat
    }
    sessionStorage.setItem(productid,JSON.stringify(product))
    clearFormulario();
})
/**
 * BOTON PARA REALIZAR LA PETICION GET AL BACKEND. NOS DEVUELVE TODOS LOS RESULTADOS EN FORMATO JSON.
 */
botonGetProduct.addEventListener("click", () => {

    listarProductos();
        
    
})
/**
 * BOTON PARA REALIZAR LA PETICION GET POR EL CAMPO ID AL BACKEND. NOS DEVUELVE UN RESULTADO EN FORMATO JSON.
 */
botonUpdateProduct.addEventListener("click", () =>{

    let productid = document.getElementById("id").value;

    sessionStorage.removeItem(productid);
    listarProductos();
})
