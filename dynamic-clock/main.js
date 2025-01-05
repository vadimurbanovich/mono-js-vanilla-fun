const hourEl = document.querySelector(".clock__hours");
const minutesEl = document.querySelector(".clock__minutes");
const secondsEl = document.querySelector(".clock__seconds");
const timeTypeEl = document.querySelector(".clock__type");

let addZero = (item) => (item = item < 10 ? `0${item}` : item);

(function updateClock() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let timeType = hours < 12 ? "am" : "pm";

  if (hours > 12) {
    hours -= 12;
  }

  hourEl.innerText = addZero(hours);
  minutesEl.innerText = addZero(minutes);
  secondsEl.innerText = addZero(seconds);
  timeTypeEl.innerText = timeType;

  setTimeout(updateClock, 1000);
})();
