const inputEl = document.querySelector(".dark-mode");
const pageEl = document.querySelector(".page");

inputEl.checked = JSON.parse(localStorage.getItem('mode'));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    pageEl.style.background = 'black';
  } else {
    pageEl.style.background = "white";
  }
}

inputEl.addEventListener('input', ()=>{
  updateBody();
  updateLocalStorage();
})

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}