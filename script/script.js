let elRotateCardBtns = document.querySelectorAll(".staff__btn");
let elCards = document.querySelectorAll(".staff__item");

elRotateCardBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        removeClass("flip", elCards, e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.classList.toggle("flip")
    })
})

function removeClass(classname, elems, current){
    elems.forEach(elem => {
        if(elem !== current){
            elem.classList.remove(classname)
        }
    })
}