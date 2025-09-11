import { currencies } from "./currencies.js";

const from = document.getElementById("from");
const to = document.getElementById("to");

const amount = document.getElementById("amount");

// --- API CONFIGURATION ---
const apiKey = "58051af938be4e585faa317e";

function populateDropdown(element) {
  element.innerHTML = "";
  currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency.code;
    option.textContent = currency.code;
    element.appendChild(option);
  });
}

populateDropdown(from);
populateDropdown(to);

async function getExchangeRate() {
  const fromVal = from.value;
  const toVal = to.value;

  try {
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromVal}/${toVal}/${amount.value}`;

    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();

    if (data.result === "success") {
      const baseRate = data.conversion_rate.toFixed(4);
      const convertedAmount = data.conversion_result;

      document.getElementById(
        "base-rate"
      ).textContent = `1 ${fromVal} = ${baseRate} ${toVal}`;
      document.getElementById("converted-amount").textContent = `${
        amount.value
      } ${fromVal} = ${convertedAmount.toLocaleString()} ${toVal}`;
    }
  } catch (error) {}
}

from.addEventListener("change", () => {
  getExchangeRate();
});

to.addEventListener("change", () => {
  getExchangeRate();
});
