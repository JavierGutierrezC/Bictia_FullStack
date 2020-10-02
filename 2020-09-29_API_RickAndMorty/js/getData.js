//obtener la API por medio de promesas
/** 
* fetch() esto es nuevo en JS 
* permite controlar errores mas facilmente
* trabaja por medio de protocolo http o https y se basa en promesas
* sistema de peticiones y respuestas
*/

//URL de la API
const API= "https://rickandmortyapi.com/api/character";

//Obtener el retorno de la API
const getData= (api) => {
    return fetch(api) // Trae la info de la api
        .then((response) => response.json())//mostrar el contenido de la API en el formato deseado en esta caso json
        .then((json)=>{
            llenarDatos(json), paginacion(json.info);
            //console.log("json -->", json);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
}

//Lenar datos en nuestra pagina
//data es el json que viene del getData
function llenarDatos(data) {
    let html = "";
    //pj es igual a data.result. es el resutado
    //data.result es la api y el resultado que es donde esta la inforcaion de los personajes
    data.results.forEach((pj) => {
        html += '<div class="col">';
        html += '<div class="card" style="width: 10rem;">';
        html += `<img src="${pj.image}" class="card-img-top" alt="...">`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pj.name}</h5>`;
        html += `<p class="card-text">Status :${pj.status} </p>`;
        html += `<p class="card-text">Especie :${pj.species} </p>`;
        html += `<p class="card-text">Gender :${pj.gender} </p>`;
        html += '</div>';
        html += '</div>';
        html += '</div>';
    });
    // imprimir datos en HTML
    document.getElementById("datosPersonajes").innerHTML = html;
}


function paginacion(data) {

    let prevDisable = "";
    let nextDisabe = "";

    // if (data.prev == null){
    //     prevDisable = "disabled";
    // }else {
    //     prevDisable = "";
    // }
    
    // if (data.next == null){
    //     nextDisable = "disabled";
    // }else {
    //     nextDisable = "";
    // }

    // let html = "";
    // html += `<li class="page-item ${prevDisable}"><a class="page-link" onclick="getData('${data.prev}')">Previous</a></li>`;
    // html += `<li class="page-item ${nextDisabe}"><a class="page-link" onclick="getData('${data.next}')">Next</a></li>`;
    // document.getElementById("paginacion").innerHTML =html;


// <!---USANDO OPERACION TERNARIA--->
    let html = "";
    (data.prev == null) ? prevDisable = "disabled" : prevDisable = ""; 
    html += `<li class="page-item ${prevDisable}"><a class="page-link" onclick="getData('${data.prev}')">Previous</a></li>`;
    (data.next == null) ? nextDisable = "disabled" : nextDisable = "";
    html += `<li class="page-item ${nextDisable}"><a class="page-link" onclick="getData('${data.next}')">Next</a></li>`;
    document.getElementById("paginacion").innerHTML =html;

}


// Activo o invoco la funcion
getData(API);