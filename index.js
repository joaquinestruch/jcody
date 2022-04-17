var checkbox = document.getElementById("bn"); 
var variablescss = getComputedStyle(document.documentElement);
var variable = String(variablescss.getPropertyValue('--backgroudwhite')).trim();
var variableletras = String(variablescss.getPropertyValue('--tipewhite')).trim();

checkbox.addEventListener("change", function() {
    if(this.checked) {
        console.log("Chequeado")
        document.documentElement.style.setProperty('--backgroudwhite', '#111111');
        document.documentElement.style.setProperty("--tipewhite", "#111111")
        console.log(variable)
    }
    else{
        document.documentElement.style.setProperty('--backgroudwhite', '#f3f4f5');
        document.documentElement.style.setProperty('--tipewhite', 'white');
    }
})