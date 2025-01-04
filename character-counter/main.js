const textareaEl = document.querySelector("#counter__textarea");
const totalCharEl = document.querySelector("#total-characters");
const remainingCharEl = document.querySelector("#remaining-characters");

updateCounter();

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalCharEl.innerText = textareaEl.value.length;
  remainingCharEl.innerText = textareaEl.maxLength - textareaEl.value.length;
}
