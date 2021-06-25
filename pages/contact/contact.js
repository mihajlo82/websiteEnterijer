let burgerMenu = document.querySelector(".burger-menu");
let hiddenMenu = document.querySelector(".hidden-menu-js");
let closeBtn = document.querySelector(".hidd-close-logo");


burgerMenu.addEventListener('click', change);
closeBtn.addEventListener('click', changeRev);


function change(){
    hiddenMenu.style.display = "block";
}

function changeRev(){
    hiddenMenu.style.display = "none";
}

window.addEventListener('resize', function(){
    if(window.innerWidth > 948){
        hiddenMenu.style.display = "none";
    }
});