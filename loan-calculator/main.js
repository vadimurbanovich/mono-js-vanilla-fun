const loanAmountInput = document.querySelector("#calculator__amount-input");
const interestInput = document.querySelector("#calculator__interest-input");
const monthInput = document.querySelector("#calculator__month-input");
const paymentEl = document.querySelector(".calculator__payment");

function calculateLoan() {
  let interest =
    (loanAmountInput.value * (interestInput.value * 0.01)) / monthInput.value;

  let monthlyPayment = loanAmountInput.value / monthInput.value + interest;

  paymentEl.innerHTML = `Monthly Payment: ${monthlyPayment.toFixed(2)}`;
}
