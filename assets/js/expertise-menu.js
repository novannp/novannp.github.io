const mediaListening = $("#media-listening");
const mediaMonitoring = $("#media-monitoring");
const portalMediaAnalytic = $("#portal-media-analytic");
const socialMedialAnalytic = $("#social-media-analytic");
const oneTimeReport = $("#one-time-report");
const handling = $("#handling");
const postActivity = $("#post-activity");
const prStatement = $("#pr-statement");

const menu = $('.menu');

mediaListening.mouseover(function () {
    $(".expertise-desc").remove();
    $(".img-desc").remove();

    const h1 = document.createElement("h1");
    h1.innerHTML = mediaListening.text();

    const p1 = document.createElement("p");
    p1.innerText = "Media listening is the process of \"listening in cyberspace\" as information that has the potential to become an issue in online media."

    const p2 = document.createElement("p");
    p2.innerText = "Nullam lacus justo, bibendum sed dapibus vel, vehicula quis elit. Nullam gravida, odio etconvallis condimentum, purus neque mollis ipsum, sed molestie dolor tellus vitae lacus. Suspendisse fermentum mauris convallis lacinia laoreet."

    const p3 = document.createElement("p");
    p3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const descContainer = document.createElement("div");
    descContainer.classList.add('expertise-desc', 'animEase');
    descContainer.append(h1, p1, p2, p3);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add('img-desc', 'animEase')

    const imgDesc = document.createElement("img");
    imgContainer.append(imgDesc)

    const menuPrevContainer = document.getElementById("menu-preview");

    menuPrevContainer.append(imgContainer, descContainer);
});


mediaMonitoring.mouseover(function () {
    $(".expertise-desc").remove();
    $(".img-desc").remove();

    const h1 = document.createElement("h1");
    h1.innerHTML = mediaMonitoring.text();

    const p1 = document.createElement("p");
    p1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const p2 = document.createElement("p");
    p2.innerText = "Nullam lacus justo, bibendum sed dapibus vel, vehicula quis elit. Nullam gravida, odio etconvallis condimentum, purus neque mollis ipsum, sed molestie dolor tellus vitae lacus. Suspendisse fermentum mauris convallis lacinia laoreet."

    const p3 = document.createElement("p");
    p3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const descContainer = document.createElement("div");
    descContainer.classList.add('expertise-desc', 'animEase');
    descContainer.append(h1, p1, p2, p3);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add('img-desc', 'animEase')

    const imgDesc = document.createElement("img");
    imgContainer.append(imgDesc)

    const menuPrevContainer = document.getElementById("menu-preview");

    menuPrevContainer.append(imgContainer, descContainer);
});

portalMediaAnalytic.mouseover(function () {
    $(".expertise-desc").remove();
    $(".img-desc").remove();

    const h1 = document.createElement("h1");
    h1.innerHTML = portalMediaAnalytic.text();

    const p1 = document.createElement("p");
    p1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const p2 = document.createElement("p");
    p2.innerText = "Nullam lacus justo, bibendum sed dapibus vel, vehicula quis elit. Nullam gravida, odio etconvallis condimentum, purus neque mollis ipsum, sed molestie dolor tellus vitae lacus. Suspendisse fermentum mauris convallis lacinia laoreet."

    const p3 = document.createElement("p");
    p3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const descContainer = document.createElement("div");
    descContainer.classList.add('expertise-desc', 'animEase');
    descContainer.append(h1, p1, p2, p3);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add('img-desc', 'animEase')

    const imgDesc = document.createElement("img");
    imgContainer.append(imgDesc)

    const menuPrevContainer = document.getElementById("menu-preview")

    menuPrevContainer.append(imgContainer, descContainer)
});

socialMedialAnalytic.mouseover(function () {
    $(".expertise-desc").remove();
    $(".img-desc").remove();

    const h1 = document.createElement("h1");
    h1.innerHTML = socialMedialAnalytic.text();

    const p1 = document.createElement("p");
    p1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const p2 = document.createElement("p");
    p2.innerText = "Nullam lacus justo, bibendum sed dapibus vel, vehicula quis elit. Nullam gravida, odio etconvallis condimentum, purus neque mollis ipsum, sed molestie dolor tellus vitae lacus. Suspendisse fermentum mauris convallis lacinia laoreet."

    const p3 = document.createElement("p");
    p3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const descContainer = document.createElement("div");
    descContainer.classList.add('expertise-desc', 'animEase');
    descContainer.append(h1, p1, p2, p3);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add('img-desc', 'animEase')

    const imgDesc = document.createElement("img");
    imgContainer.append(imgDesc)

    const menuPrevContainer = document.getElementById("menu-preview")

    menuPrevContainer.append(imgContainer, descContainer)
});

oneTimeReport.mouseover(function () {
    $(".expertise-desc").remove();
    $(".img-desc").remove();

    const h1 = document.createElement("h1");
    h1.innerHTML = oneTimeReport.text();

    const p1 = document.createElement("p");
    p1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const p2 = document.createElement("p");
    p2.innerText = "Nullam lacus justo, bibendum sed dapibus vel, vehicula quis elit. Nullam gravida, odio etconvallis condimentum, purus neque mollis ipsum, sed molestie dolor tellus vitae lacus. Suspendisse fermentum mauris convallis lacinia laoreet."

    const p3 = document.createElement("p");
    p3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const descContainer = document.createElement("div");
    descContainer.classList.add('expertise-desc', 'animEase');
    descContainer.append(h1, p1, p2, p3);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add('img-desc', 'animEase')

    const imgDesc = document.createElement("img");
    imgContainer.append(imgDesc)

    const menuPrevContainer = document.getElementById("menu-preview")

    menuPrevContainer.append(imgContainer, descContainer)
});

handling.mouseover(function () {
    $(".expertise-desc").remove();
    $(".img-desc").remove();

    const h1 = document.createElement("h1");
    h1.innerHTML = handling.text();

    const p1 = document.createElement("p");
    p1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const p2 = document.createElement("p");
    p2.innerText = "Nullam lacus justo, bibendum sed dapibus vel, vehicula quis elit. Nullam gravida, odio etconvallis condimentum, purus neque mollis ipsum, sed molestie dolor tellus vitae lacus. Suspendisse fermentum mauris convallis lacinia laoreet."

    const p3 = document.createElement("p");
    p3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const descContainer = document.createElement("div");
    descContainer.classList.add('expertise-desc', 'animEase');
    descContainer.append(h1, p1, p2, p3);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add('img-desc', 'animEase')

    const imgDesc = document.createElement("img");
    imgContainer.append(imgDesc)

    const menuPrevContainer = document.getElementById("menu-preview")

    menuPrevContainer.append(imgContainer, descContainer)
});

postActivity.mouseover(function () {
    $(".expertise-desc").remove();
    $(".img-desc").remove();

    const h1 = document.createElement("h1");
    h1.innerHTML = postActivity.text();

    const p1 = document.createElement("p");
    p1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const p2 = document.createElement("p");
    p2.innerText = "Nullam lacus justo, bibendum sed dapibus vel, vehicula quis elit. Nullam gravida, odio etconvallis condimentum, purus neque mollis ipsum, sed molestie dolor tellus vitae lacus. Suspendisse fermentum mauris convallis lacinia laoreet."

    const p3 = document.createElement("p");
    p3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const descContainer = document.createElement("div");
    descContainer.classList.add('expertise-desc', 'animEase');
    descContainer.append(h1, p1, p2, p3);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add('img-desc', 'animEase')

    const imgDesc = document.createElement("img");
    imgContainer.append(imgDesc)

    const menuPrevContainer = document.getElementById("menu-preview")

    menuPrevContainer.append(imgContainer, descContainer)
});

prStatement.mouseover(function () {
    $(".expertise-desc").remove();
    $(".img-desc").remove();

    const h1 = document.createElement("h1");
    h1.innerHTML = prStatement.text();

    const p1 = document.createElement("p");
    p1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const p2 = document.createElement("p");
    p2.innerText = "Nullam lacus justo, bibendum sed dapibus vel, vehicula quis elit. Nullam gravida, odio etconvallis condimentum, purus neque mollis ipsum, sed molestie dolor tellus vitae lacus. Suspendisse fermentum mauris convallis lacinia laoreet."

    const p3 = document.createElement("p");
    p3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis lacinia justo, eurhoncus quam feugiat ac."

    const descContainer = document.createElement("div");
    descContainer.classList.add('expertise-desc', 'animEase');
    descContainer.append(h1, p1, p2, p3);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add('img-desc', 'animEase')

    const imgDesc = document.createElement("img");
    imgContainer.append(imgDesc)

    const menuPrevContainer = document.getElementById("menu-preview")

    menuPrevContainer.append(imgContainer, descContainer)
});
