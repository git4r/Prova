  
function bg_on(e){
    form = document.getElementById("interruttore");
    form.style = "background-color: white; background-image: none;"
    //Blocchiamo il refresh della pagina.
    e.preventDefault();
    
}

window.onload = function () {
        
    document.getElementById("accendi").addEventListener("click", bg_on);
    //document.getElementById("spegni").addEventListener("click", bg_off);

};