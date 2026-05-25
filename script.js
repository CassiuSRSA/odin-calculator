const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

let currentCalculation = [];
let result = 0;
let value = "";

console.log(currentCalculation);

const operate = () => {
  value = "";
  switch (currentCalculation[1]) {
    case "+":
      result =
        parseFloat(currentCalculation[0]) + parseFloat(currentCalculation[2]);
      break;
    case "-":
      result =
        parseFloat(currentCalculation[0]) - parseFloat(currentCalculation[2]);
      currentCalculation = [result];
      break;
    case "*":
      result =
        parseFloat(currentCalculation[0]) * parseFloat(currentCalculation[2]);
      currentCalculation = [result];
      break;
    case "/":
      result =
        parseFloat(currentCalculation[0]) / parseFloat(currentCalculation[2]);
      currentCalculation = [result];
      break;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // clear the display and reset the calculation
    if (e.target.id === "C") {
      currentCalculation = [];
      value = "";
      display.textContent = "0";
      return;
    }

    // if the operator is clicked and there is no current calculation, push the value and operator to the calculation array
    if (
      currentCalculation.length === 0 &&
      e.target.classList.contains("operator")
    ) {
      currentCalculation.push(value);
      currentCalculation.push(e.target.id);
      console.log(currentCalculation);
      value = "";

      display.textContent = currentCalculation[0] + e.target.id;

      return;
      // if the operator is clicked and there is already a calculation, push the value and operator to the calculation array
    } else if (
      currentCalculation.length === 1 &&
      e.target.classList.contains("operator")
    ) {
      currentCalculation.push(e.target.id);
      console.log(currentCalculation);
      value = "";
      display.textContent = currentCalculation[0] + e.target.id;
      return;
    } else if (
      e.target.classList.contains("operator") &&
      currentCalculation.length === 2
    ) {
      currentCalculation.push(value);
      display.textContent = currentCalculation.join("");
      console.log(currentCalculation);
      return;
    }

    if (e.target.id === "=") {
      currentCalculation.push(value);
      operate();
      display.textContent = result;
      return;
    }

    value += e.target.id;
    console.log(value);
    display.textContent = currentCalculation.join("") + value;
  });
});
