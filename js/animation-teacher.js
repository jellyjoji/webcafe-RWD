const button = document.querySelector(".control-ani");
const visual = document.querySelector(".visual");

button.addEventListener("click", () => {
  visual.classList.toggle("is--active");
});
