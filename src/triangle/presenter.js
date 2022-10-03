import Triangle from "./triangle";

const first = document.querySelector("#first-number");
const second = document.querySelector("#second-number");
const third = document.querySelector("#third-number");
const form = document.querySelector("#triangle-form");
const algoRB = document.querySelectorAll('input[name="algorithm"]');
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const thirdNumber = Number.parseInt(third.value);
  const algoNumber = 1 ? algoRB[0].checked : 2;
  const triangle = new Triangle(algoNumber);

  div.innerHTML = "<p>" + triangle.classify(firstNumber, secondNumber, thirdNumber) + "</p>";
});
