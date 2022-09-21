const nav = document.querySelector("nav")


document.getElementById("menu-toggle").addEventListener("click", function(){
    if(nav.style.display === "none"){
        nav.style.display = "block"
    }else{
        nav.style.display ="none"
    }
})