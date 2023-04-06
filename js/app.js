let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
}
function currentSlide(n){
    showSlides(slideIndex = n)
}
function showSlides(n){
    let slides = document.getElementsByClassName("comment");
    let dots = document.getElementsByClassName("dot");
if(n > slides.length){
    slideIndex = 1
}
if(n < 1){
    slideIndex = slides.length
}
for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none"
}
for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "")
}
    slides[slideIndex-1
].style.display = "flex";
dots[slideIndex-1].className += " active"
}

let modal = document.querySelector(".modal")
let modalActive = document.querySelectorAll(".modal__active")

modalActive.forEach(active => {
    active.addEventListener("click", (evt)=>{
        evt.preventDefault()
        modal.classList.toggle("modal__active")
        document.body.classList.toggle("body_active")
    })
});
