const imageContainerEl = document.querySelector(".image-container");
const buttonEl = document.querySelector(".image__button");

buttonEl.addEventListener("click", () => {
  const imageNum = 10;
  addNewImages(imageNum);
});

function addNewImages(imageNum) {
  for (let i = 0; i < imageNum; i++) {
    const newImageEl = document.createElement("img");
    newImageEl.classList.add("image__content");
    newImageEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainerEl.append(newImageEl);
  }
}
