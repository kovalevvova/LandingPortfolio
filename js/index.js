let burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
  document.querySelector(".burger").classList.toggle("active");
  document.querySelector(".nav-bar").classList.toggle("active");
  document.querySelector("body").classList.toggle("active");
  document.querySelector(".lang").classList.toggle("active");
  document.querySelector(".header").classList.toggle("active");
});

const anchors = document.querySelectorAll("a.item");
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    document.querySelector(".burger").classList.toggle("active");
    document.querySelector(".nav-bar").classList.toggle("active");
    document.querySelector("body").classList.toggle("active");
    document.querySelector(".lang").classList.toggle("active");
    document.querySelector(".header").classList.toggle("active");

    e.preventDefault();

    let blockID = anchor.getAttribute("href");

    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
