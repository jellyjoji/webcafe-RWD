const button = document.querySelector(".control-ani");
const visual = document.querySelector(".visual");
const flipButton = document.querySelector(".flip-button");
const card = document.querySelector(".card");

button.addEventListener("click", () => {
  visual.classList.toggle("is--active");
});

flipButton.addEventListener("click", () => {
  card.classList.toggle("is--flipped");
});
