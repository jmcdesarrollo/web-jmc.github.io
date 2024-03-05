let menuVisible = false;
// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300) {
        // Asigna clases específicas a las barras de progreso de habilidades en un documento HTML, simpre ordenadas
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("angular");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("wordpress");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");   
    } 
}
//detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}
// borras datos del formulario una vez enviados

function limpiarCampos() {
    document.getElementById("myForm").reset();
}

// Content-reveal

window.addEventListener("scroll", function() {
  // Detecta si el usuario ha llegado al final de la página
  if (window.scrollY >= document.body.scrollHeight - document.documentElement.clientHeight) {
    // Muestra el contenido oculto
    document.getElementById("content-reveal").style.display = "block";
  }
});
