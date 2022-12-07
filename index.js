var result = document.querySelector(".result");

alert("Welcome to Currency Converter!")
var budget = Number(prompt("How much money do you have?"));
var currency = prompt("What currency are you using? USD, EUR, SUM or RUB");
var convert = prompt("What currency do you want to convert it to? = USD, EUR, SUM or RUB");

var dollar = 1;
var usdToEur = dollar * 0.95;
var usdToSum = dollar * 11258;
var usdToRub = dollar * 62;
var sumToUsd = dollar * 0.000089;
var sumToEur = dollar * 0.000084;
var sumToRub = dollar * 0.0055;
var eurToSum = dollar * 11843;
var eurToUsd = dollar / 0.95;
var eurToRub = dollar * 65.2;
var rubToUsd = dollar * 0.016;
var rubToSum = dollar * 181;
var rubToEur = dollar * 0.015;

if ((currency === "USD" || currency === "usd") && (convert === "EUR" || convert === "eur")) {
    result.textContent = `${budget * usdToEur}€`;
} else if ((currency === "USD" || currency === "usd") && (convert === "SUM" || convert === "sum")) {
    result.textContent = `${budget * usdToSum}so'm`;
} else if ((currency === "USD" || currency === "usd") && (convert === "RUB" || convert === "rub")) {
    result.textContent = `${budget * usdToRub}₽`;
} else if ((currency === "SUM" || currency === "sum") && (convert === "USD" || convert === "usd")) {
    result.textContent = `${budget * sumToUsd}$`;
} else if ((currency === "SUM" || currency === "sum") && (convert === "EUR" || convert === "eur")) {
    result.textContent = `${budget * sumToEur}€`;
} else if ((currency === "SUM" || currency === "sum") && (convert === "RUB" || convert === "rub")) {
    result.textContent = `${budget * sumToRub}₽`;
} else if ((currency === "EUR" || currency === "eur") && (convert === "SUM" || convert === "sum")) {
    result.textContent = `${budget * eurToSum}so'm`;
} else if ((currency === "EUR" || currency === "eur") && (convert === "USD" || convert === "usd")) {
    result.textContent = `${budget * eurToUsd}$`;
} else if ((currency === "EUR" || currency === "eur") && (convert === "RUB" || convert === "rub")) {
    result.textContent = `${budget * eurToRub}₽`;
} else if ((currency === "RUB" || currency === "rub") && (convert === "USD" || convert === "usd")) {
    result.textContent = `${budget * rubToUsd}$`;
} else if ((currency === "RUB" || currency === "rub") && (convert === "EUR" || convert === "eur")) {
    result.textContent = `${budget * rubToEur}€`;
} else if ((currency === "RUB" || currency === "rub") && (convert === "SUM" || convert === "sum")) {
    result.textContent = `${budget * rubToSum}so'm`;
} else {
    result.textContent("Something went wrong!Please, try again.")
}