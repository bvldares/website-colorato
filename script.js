const nav = document.querySelector("nav")


document.getElementById("menu-toggle").addEventListener("click", function(){
    if(nav.style.display === "block"){
        nav.style.display = "none"
    }else{
        nav.style.display ="block"
    }
})



var screen = window.matchMedia("(min-width:765px)")

function navSwitch(screen) {
    if(screen){
        nav.style.display = "block"
        
        document.querySelector(".hamburger").style.display ="none"
    }
}


navSwitch(screen)
screen.addListener(navSwitch)
