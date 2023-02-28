
let OcultarTexto_bt = document.getElementById("OcultarTexto_bt")

let OcultarTexto = document.getElementById("OcultarTexto")

OcultarTexto_bt.addEventListener("click", cambiar_texto)

function cambiar_texto(){
    OcultarTexto.classList.toggle("mostrar")

    if(OcultarTexto.classList.contains("mostrar")){
        OcultarTexto_bt.innerHTML = "Mostrar menos"
    }
    else{
        OcultarTexto_bt.innerHTML = "Mostrar mas"
    }
}