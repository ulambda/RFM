const header = document.querySelector("header");

function scrollFunction() {
    if(scrollY > 238){
    header.classList.add('scrolled')
    }else {
        header.classList.remove('scrolled')
    }
}
