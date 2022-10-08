let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "900px"){
        startmenu.style.bottom = "-65px"
    }
    else{
        startmenu.style.bottom = "550px"
    }
})
