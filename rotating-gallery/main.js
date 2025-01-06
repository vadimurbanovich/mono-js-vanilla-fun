const galleryContainerEl = document.querySelector(".gallery__container");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let yPos = 0;
let timer = 1000;

prevBtn.addEventListener("click", () => {
  yPos += 45;
  clearTimeout(timer);
  updateGallery();
});

nextBtn.addEventListener("click", () => {
  yPos -= 45;
  clearTimeout(timer);
  updateGallery();
});

updateGallery();

function updateGallery() {
  galleryContainerEl.style.transform = `perspective(1000px) rotateY(${yPos}deg)`;

  timer = setTimeout(() => {
    yPos -= 45;
    updateGallery();
  }, 3000);
}
