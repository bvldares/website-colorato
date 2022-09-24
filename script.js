const nav = document.querySelector("nav")
var screen = window.matchMedia("(min-width:765px)")
var hamburgerScreen = window.matchMedia("(max-width:764px)")


document.getElementById("menu-toggle").addEventListener("click", function(){
    if(nav.style.display === "block"){
        nav.style.display = "none"
    }else{
        nav.style.display ="block"
    }
})

