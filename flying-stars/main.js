const page = document.querySelector(".page");

page.addEventListener("mousemove", (event)=>{
  const xCoord = event.offsetX;
  const yCoord = event.offsetY;
  const star = document.createElement('span');
  const size = Math.random() * 100;

  star.classList.add('star');

  star.style.left = `${xCoord}px`;
  star.style.top = `${yCoord}px`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  

  page.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 3000);
})
