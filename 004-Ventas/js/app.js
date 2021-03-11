var nav = document.getElementById('nav');

window.onscroll = function(){
    if ( window.pageYOffset > 100){
        nav.style.background = "#4d0686";
    }else if ( window.pageYOffset < 99) {
        nav.style.background = "rgba(255,255,255,0.1)";
    }
}  

