let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList=""
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive"
        menuVisible = true;
    }
    
}

function seleccionar (){
    document.getElementById("nav").classList="";
    menuVisible=false;
}

function animacionBarras(){
    var habilidades = document.getElementById("Habilidades");
    var distancia= window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia>=300){
        let habilidades = document.getElementsByClassName("mov");
        habilidades[0].classList.add("aprendizaje");
        habilidades[1].classList.add("resposabilidad");
        habilidades[2].classList.add("liderazgo");
        habilidades[3].classList.add("flexibilidad");
        habilidades[4].classList.add("equipo");
        habilidades[5].classList.add("ingles");
        habilidades[6].classList.add("ofimatica");
        habilidades[7].classList.add("java");
        habilidades[8].classList.add("htmlcss");
        habilidades[9].classList.add("photoshop");
    }
}

window.onscroll=function(){
    animacionBarras();
}