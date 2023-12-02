let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let siteBody = document.getElementById("site-body");

    if (scrollTop > lastScrollTop && scrollTop > 500) {
        // Faites défiler vers le bas et dépassez 500 pixels
        siteBody.classList.add("header-hidden");
    } else {
        // Faites défiler vers le haut ou n'avez pas atteint 500 pixels
        siteBody.classList.remove("header-hidden");
    }

    lastScrollTop = scrollTop;
});