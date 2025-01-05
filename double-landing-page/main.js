const wrapperEl = document.querySelector(".wrapper");
const splitLeftEl = document.querySelector(".landing__split--left");
const splitRightEl = document.querySelector(".landing__split--right");

splitLeftEl.addEventListener("mouseenter", () => {
  wrapperEl.classList.add("active-left");
});

splitLeftEl.addEventListener("mouseleave", () => {
  wrapperEl.classList.remove("active-left");
});

splitRightEl.addEventListener("mouseenter", () => {
  wrapperEl.classList.add("active-right");
});

splitRightEl.addEventListener("mouseleave", () => {
  wrapperEl.classList.remove("active-right");
});
