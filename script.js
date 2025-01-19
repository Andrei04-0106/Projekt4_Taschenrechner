const display = document.getElementById("text-content");
const numbers = document.querySelectorAll(".numbers, .Operator");
const result = document.querySelector(".result");
const Clear = document.querySelector(".Clear");
const ClearOne = document.querySelector(".Clear-one");

const updateDisplay = (value) => {
  display.value += value;
};

numbers.forEach((numberElement) => {
  numberElement.addEventListener("click", () => {
    updateDisplay(numberElement.innerText);
  });
});

function clearAll() {
  Clear.addEventListener("click", () => {
    display.value = "";
  });
}
clearAll();

const calculateExpression = () => {
  display.value = eval(display.value);
};

result.addEventListener("click", calculateExpression);

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "Enter") {
    calculateExpression();
  } else if (key === "Escape") {
    display.value = "";
  } else if (/^[0-9+\-*/,]$/.test(key)) {
    updateDisplay(key);
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
});

ClearOne.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});
