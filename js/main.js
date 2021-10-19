console.log("Hola Codo")

function inicio(){
    nombre = document.getElementById('nombre');
    nombre.addEventListener('change', validaNombre, true);
    nombre.addEventListener('focus', limpiar, true);
    mail = document.getElementById('mail');
    mail.addEventListener('change', validaMail,true);
    mail.addEventListener('focus', limpiar, true);

}


function validaNombre(){
    palabras = this.value.split(" ");

    if(palabras.length >= 2){
        nombre.className += " is-valid"
    }
    else{
        nombre.className += " is-invalid"
    }
}

function validaMail(){
    if(this.value.includes("@") && this.value.includes(".com")){
        mail.className += " is-valid"
    }
    else{
        mail.className += " is-invalid"
    }
}

function limpiar(){
    this.className="form-control"
}

window.addEventListener('load', inicio, true);