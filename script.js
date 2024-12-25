const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const operators = ["+", "-", "x", "/", "="];

let num1 = "";
let num2 = "";
let operator = "";
let answer = 0;
let evaluated = false;

const updateDisplay = () => {
  if (evaluated === true) {
    display.textContent = answer;
  }
  if (evaluated === false) {
    display.textContent = `${num1}${operator}${num2}`;
  }
};

const clearValues = () => {
  num1 = num2 = operator = "";
};

const clearDisplay = () => {
  display.textContent = "";
};

buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    selectedBtn = e.target;

    if (selectedBtn.classList.contains("clear")) {
      clearValues();
      clearDisplay();
      updateDisplay();
    }
    if (operator === "" && selectedBtn.classList.contains("number")) {
      num1 += selectedBtn.textContent;
      updateDisplay();
    }
    if (num1 !== "" && selectedBtn.classList.contains("operator")) {
      operator = selectedBtn.textContent;
      updateDisplay();
    }
    if (operator !== "" && selectedBtn.classList.contains("number")) {
      num2 += selectedBtn.textContent;
      updateDisplay();
    }

    if (
      num1 !== "" &&
      num2 !== "" &&
      operator !== "" &&
      selectedBtn.classList.contains("eval") &&
      evaluated === false
    ) {
      evaluated = true;
      if (operator === "+") {
        answer = +num1 + +num2;
        updateDisplay();
        clearValues();
        evaluated = false;
      }
      if (operator === "-") {
        answer = +num1 - +num2;
        updateDisplay();
        clearValues();
        evaluated = false;
      }
      if (operator === "*") {
        answer = +num1 * +num2;
        updateDisplay();
        clearValues();
        evaluated = false;
      }
      if (operator === "/") {
        answer = +num1 / +num2;
        updateDisplay();
        clearValues();
        evaluated = false;
      }
    }
  });
});
