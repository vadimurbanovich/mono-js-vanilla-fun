const wrapperEl = document.querySelector(".generator__wrapper");

for (let i = 0; i < 30; i++) {
  const colorBlock = document.createElement("div");
  colorBlock.classList.add("color__block");
  wrapperEl.append(colorBlock);
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;

  let colorCode = "#";

  for (let i = 0; i < colorCodeLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars[randomNumber];
  }

  return colorCode;
}

const colorBlocks = document.querySelectorAll(".color__block");

colorGenerator();

function colorGenerator() {
  colorBlocks.forEach((element) => {
    element.style.background = randomColor();
    element.innerText = randomColor();
  });
}

colorBlocks.forEach((element) => {
  element.addEventListener("click", () => {
    colorGenerator();
  });
});
