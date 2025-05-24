const input = document.querySelector(".toolbar input");
const viewer = document.querySelector("#viewer");

input.addEventListener("input", function () {
  viewer.src = input.value;
});

document.querySelectorAll("[data-viewport]").forEach((el) => {
  el.addEventListener("click", function () {
    viewer.style.width = el.getAttribute("data-viewport");
  })
})