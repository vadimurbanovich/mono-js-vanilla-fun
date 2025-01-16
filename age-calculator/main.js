const buttonEl = document.querySelector(".calculator__form-button");
const inputEl = document.querySelector("#birthday");
const resultEl = document.querySelector(".calculator__result");

function calculateAge() {
  const inputElValue = inputEl.value;

  if (inputElValue === "") alert("Enter your birthday");
  else {
    const age = getAge(inputElValue);

    resultEl.innerHTML = `You are ${age} year${age > 1 ? "s" : ""} old`;
  }
}

function getAge(inputElValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(inputElValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

buttonEl.addEventListener("click", calculateAge);
