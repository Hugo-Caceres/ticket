function validar(event, formulario){
    event.preventDefault();

    if(formulario.nombre.value.trim().length == 0){
        alert("Debe ingresar un Nombre");
        return false;
    }
    if(formulario.apellido.value.trim().length == 0){
        alert("Debe ingresar un Apellido");
        return false;
    }

    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!re.test(formulario.email.value)){
        alert("Debe ingresar un email");
        return false;
    }

    if(formulario.cantidad.value == ""){
        alert("Debe ingresar una Cantidad");
        return false;
    }

    if(formulario.categoria.value == ""){
        alert("Debe ingresar una Categoria");
        return false;
    } 
     
    return true;
}


function totalAPagar() {
    var cantidad = parseInt(document.getElementById('cantidadInput').value);
    var categoria = parseInt(document.getElementById('categoria').value);
    var montoAPagar = 0;
    
    
    if(categoria == 1){
        montoAPagar = cantidad*200*0.2;
    } else if(categoria == 2){
        montoAPagar = cantidad*200*0.5;
    } else {
        montoAPagar = cantidad*200*0.85;
    }

    console.log(montoAPagar);
    document.getElementById("pagar").innerHTML = montoAPagar;
}

const btnClick = document.getElementById("boton");

btnClick.addEventListener("click",totalAPagar);


const btnBorrar = documen.getElementById("borrar");

btnBorrar.addEventListener("click", function(){
    document.querySelector("#cantidad").value = "";
    document.querySelector("#categoria").value = "";
    document.querySelector("#nombre").value = "";
    document.querySelector("#apellido").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#total").value = "";
});
