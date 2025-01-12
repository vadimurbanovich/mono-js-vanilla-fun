const searchBarContainerEl = document.querySelector(".search-bar__container");
const magnifierEl = document.querySelector(".search-bar__magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
});
