$(document).ready(function () {
    $(this).scrollTop(0);
});

$(".jumbotron").hide();
$("main").hide();
$("footer").hide();
$("#navbar").hide();
// Get element to start welcome animation
const logoImage = document.getElementById('splash-logo');
const welcomeDiv = document.getElementById('slideUp');

const wrapper = document.getElementsByClassName('welcome-anime-wrapper');

logoImage.addEventListener('animationend', (event) => {
    welcomeDiv.insertAdjacentHTML("beforeend", '<div class="mx-auto typewriter"><br><h3>Welcome To Subhika .... </h3></div><br><a  id="btn-welcome" class="mx-auto btn btn-outline-light">Mulai</a>')

    const btnWelcome = document.getElementById('btn-welcome');

    btnWelcome.addEventListener('click', function handleClick(e = event) {
        e.preventDefault();
        wrapper[0].classList.toggle("animUp", true);
        setTimeout(() => {
            $("#navbar").show();
            $(".jumbotron").show();
            $("main").show();
            $("footer").show();
            AOS.refresh();
        }, 1000);
        setTimeout(() => {
            $(".welcome-anime-wrapper").hide();
            // window.location.hash = '#navbar';
            AOS.refresh();
        }, 1500);
    })
});

