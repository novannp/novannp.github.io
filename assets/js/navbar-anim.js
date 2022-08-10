// Navbar hide animation
document.addEventListener("DOMContentLoaded", function () {
    const autohide = document.querySelector(".hide");
    if (autohide) {
        let last_scroll = 0;
        window.addEventListener('scroll', function () {
            let scroll_top = window.scrollY

            if (scroll_top < last_scroll) {
                autohide.classList.remove('scrolled-down');
                autohide.classList.add('scrolled-up')
            } else {
                autohide.classList.remove('scrolled-up');
                autohide.classList.add('scrolled-down')
            }
            last_scroll = scroll_top;
        })
    }
})

// Change navbar color when scrolling
window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    if (currentScrollPos > 20) {
        // I am using 'display' instead of 'top':
        $(".navbar").addClass("navbar-dark bg-blue");
        $(".bg-dark").css("background-color:");
    } else {
        $(".navbar").removeClass("navbar-dark bg-dark");
    }
}