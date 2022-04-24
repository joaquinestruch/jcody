var checkbox = document.getElementById("bn"); 
var variablescss = getComputedStyle(document.documentElement);
var variable = String(variablescss.getPropertyValue('--backgroudwhite')).trim();
var variableletras = String(variablescss.getPropertyValue('--tipewhite')).trim();

function scrolltop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

checkbox.addEventListener("change", function() {
    if(this.checked) {
        console.log("Chequeado")
        document.documentElement.style.setProperty('--backgroudwhite', '#111111');
        document.documentElement.style.setProperty("--tipewhite", "#111111")
        document.documentElement.style.setProperty("--contrario", "white")
        document.getElementById("img1").src="./imagenes/plantilla1_negro.png"
        document.getElementById("img2").src="./imagenes/plantilla2_negro.png"
        document.getElementById("img3").src="./imagenes/plantilla3_negro.png"
        console.log(variable)
        scrolltop()

    }
    else{
        document.documentElement.style.setProperty('--backgroudwhite', '#f3f4f5');
        document.documentElement.style.setProperty('--tipewhite', 'white');
        document.documentElement.style.setProperty('--contrario', 'black');
        document.getElementById("img1").src="./imagenes/plantilla 1.png"
        document.getElementById("img2").src="./imagenes/plantilla2.png"
        document.getElementById("img3").src="./imagenes/plantilla 3.png"
        scrolltop()
    }
})