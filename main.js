// function crearBoletin(contenedorId, min, cantidadNotas){
function crearBoletin(contenedorId, min, cantidadNotas){
    ///Encontrar el contenedor por su ID
    let etiquetaContenedor = document.getElementById(contenedorId);

    ///Loop para crear tantas notas como quiera el usuario
    for(let conteoDNotas=1; conteoDNotas <= cantidadNotas; conteoDNotas++){
        ///Crear el texto de la etiqueta <label>
        let textoEtiqueta = "Nota " + conteoDNotas;
        
        ///Llamar funcion para crear inputs de las notas
        let parrafoNota = crearInputNotas(textoEtiqueta,min);

        ///Agregar la etiqueta <p> al contenedor
        etiquetaContenedor.appendChild(parrafoNota);

    }

}
function crearInputNotas(identificadorInput, valorMin){

    ///crear las etiquetas <p>
    let etiquetaNota = document.createElement("p");

    ///crear la etiqueta <label>
    let etiquetaLabel = document.createElement("label");
    etiquetaLabel.innerText = identificadorInput + " : ";

    /// crear etiqueta <input>
    let etiquetaInput = document.createElement("input");

    /// conectar con la etiqueta input
    etiquetaLabel.setAttribute("for", identificadorInput);

    //establecer los atributos a la etiqueta input
    etiquetaInput.setAttribute("type", "number");
    etiquetaInput.setAttribute("id", identificadorInput);
    etiquetaInput.setAttribute("min", valorMin);
    etiquetaInput.setAttribute("value", 0);

    //Agregarle las etiquetas label e input a la etiqueta parrafo
    etiquetaNota.appendChild(etiquetaLabel);
    etiquetaNota.appendChild(etiquetaInput);
    
    ///Devolver la etiqueta parrafo
    return etiquetaNota;

}   

function calcular(){
    let estudiante = [];
    let posicionNota = 0;
    let notas = document.getElementById("notas-estudiante");

    for(let item of notas.children){
        let nota_estudiante = +item.children[1].value;
        estudiante[posicionNota] = nota_estudiante;
        posicionNota = posicionNota + 1

    }

    let promedio = sacarPromedio(estudiante);
    let nota_mayor = notaMayor(estudiante);
    let nota_menor = notaMenor(estudiante);
    let aplazado = aproboReprobo(promedio);

    for(let item of notas.children){
        let nota_estudiante = +item.children[1].value

        item.children[1].className = "notasEstudiante";

        if(nota_estudiante == nota_mayor){
            item.children[1].className = "notaMayor";

        }

        if(nota_estudiante == nota_menor){
            item.children[1].className = "notaMenor";

        }

    }

    // let mensajeSalida = "Promedio de Nota : " + promedio + 
    //                      "/ Nota Mayor: " + nota_mayor +
    //                      "/ Nota Menor: " + nota_menor +
    //                      "/ " + aplazado;

    let mensajeSalida = ` Promedio de Nota ${promedio} <br> Nota Mayor: ${nota_mayor} <br> Nota Menor: ${nota_menor} <br> <span id="aplazado"> ${aplazado} </span>`;
    document.getElementById("resultado").innerHTML = mensajeSalida;

    let etiqueta_span = document.getElementById("aplazado");

    if("Aprobó" == aplazado) {
        etiqueta_span.innerHTML = `<p style="color: green;"> ${aplazado}</p>`;
    }
    else{
        etiqueta_span.innerHTML = `<p style="color: red;"> ${aplazado}</p>`;
    }
}

function sacarPromedio(arrayNotas){
    let sumar_notas = 0;
    
    for(let nota of arrayNotas){
        sumar_notas += nota;
    }

    return (sumar_notas/arrayNotas.length);
} 

function notaMayor(arrayNotas){
    let mayor = arrayNotas[0];

    for(let nota_mayor of arrayNotas){
        if(nota_mayor > mayor){
            mayor = nota_mayor;
        }
    }

    return mayor;

}

function aproboReprobo(promedioEstudiante){

    if(promedioEstudiante >= 3){
        return "Aprobó"
    }
    else{
        return "Aplazado"
    }

}

function notaMenor(arrayNotas){
    let menor = arrayNotas[0];

    for(let nota_menor of arrayNotas){
        if(nota_menor < menor){
            menor = nota_menor;
        }

    } 

    return menor;

}
