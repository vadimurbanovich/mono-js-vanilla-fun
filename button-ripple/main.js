const btnEl = document.querySelector('.button');

btnEl.addEventListener('mouseover', (event)=>{
  const yPos = (event.pageY - btnEl.offsetTop);
  const xPos = (event.pageX - btnEl.offsetLeft);

  btnEl.style.setProperty("--xPos", `${xPos}px`);
  btnEl.style.setProperty("--yPos", `${yPos}px`);
}) 