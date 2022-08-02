const formRating = document.querySelector("#formRating");
const options = [...document.querySelectorAll(".button--circle")];
let optionSelected = null;
let cardScored = document.querySelector("#card__scored");

const cardRating = document.querySelector(".card__rating");
const cardComplete = document.querySelector(".card__complete");

cardComplete.style.display = "none";

function getOptionSelected() {
  const optionSelected = document.querySelector(".active");
  return optionSelected;
}

function resetOptions() {
  options.forEach((option) => {
    option.classList.remove("active");
  });
}

formRating.addEventListener("submit", (event) => {
  event.preventDefault();
  optionSelected = getOptionSelected();
  if (!optionSelected) {
    return;
  }
  cardRating.style.display = "none";
  cardComplete.style.display = "flex";
  cardScored.textContent = `You selected ${optionSelected.textContent} out of 5`;
  resetOptions();
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    resetOptions();
    option.classList.add("active");
  });
});
