let lastScrollTop = 0;



window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let siteBody = document.getElementById("site-body");

    if (scrollTop > lastScrollTop && scrollTop > 500) {
        siteBody.classList.add("header-hidden");
    } else {
        siteBody.classList.remove("header-hidden");
    }

    lastScrollTop = scrollTop;
});


let slideIndex = 1;
const slides = document.getElementsByClassName("custom-slider");
const dots = document.getElementsByClassName("dot");
let timer;

showSlides();

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    timer = setTimeout(showSlides, 5000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}   
for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener("mouseover", function() {
        clearTimeout(timer);
    });
    
    slides[i].addEventListener("mouseout", function() {
        timer = setTimeout(showSlides, 5000);
    });
}



