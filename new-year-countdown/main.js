const daysEl = document.querySelector(".countdown__days");
const hoursEl = document.querySelector(".countdown__hours");
const minutesEl = document.querySelector(".countdown__minutes");
const secondsEl = document.querySelector(".countdown__seconds");

const newYearTime = new Date("Jan 1, 2026, 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  const currentTime = new Date().getTime();
  const timeToNewYear = newYearTime - currentTime;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const currentDays = Math.floor(timeToNewYear / days);
  const currentHours = Math.floor((timeToNewYear % days)/ hours);
  const currentMinutes = Math.floor((timeToNewYear % hours)/ minutes);
  const currentSeconds = Math.floor((timeToNewYear % minutes)/ seconds);
  
  daysEl.innerText = currentDays;
  hoursEl.innerText = currentHours;
  minutesEl.innerText = currentMinutes;
  secondsEl.innerText = currentSeconds;

  setTimeout(updateCountdown, 1000);
}
