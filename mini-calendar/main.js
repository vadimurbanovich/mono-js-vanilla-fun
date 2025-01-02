const monthNameEl = document.querySelector(".calendar__month");
const dayNameEl = document.querySelector(".calendar__day");
const dayNumberEl = document.querySelector(".calendar__day-number");
const yearEl = document.querySelector(".calendar__year");

const date = new Date();
const month = date.getMonth();

monthNameEl.innerText = date.toLocaleString('en', { month:'long' });
dayNameEl.innerText = date.toLocaleString("en", { weekday: "long" });
dayNumberEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();