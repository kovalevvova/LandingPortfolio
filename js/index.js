let burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
    document.querySelector(".burger").classList.toggle("active")
    document.querySelector(".nav-bar").classList.toggle("active")
    document.querySelector("body").classList.toggle("active")
    document.querySelector(".lang").classList.toggle("active")
    document.querySelector(".header").classList.toggle("active")
})
