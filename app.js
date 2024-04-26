let display = document.getElementById('display');
let expression = '';

function clearDisplay() {
  display.value = '0';
  expression = '';
}

function appendNumber(number) {
  if (display.value === '0') {
    display.value = number;
  } else {
    display.value += number;
  }
  expression += number;
}

function appendOperator(operator) {
  display.value = operator;
  expression += operator;
}

function appendDecimal() {
  if (!display.value.includes('.')) {
    display.value += '.';
    expression += '.';
  }
}

function changeSign() {
  display.value = display.value * -1;
}

function percent() {
  display.value = display.value / 100;
}

function calculate() {
  try {
    display.value = eval(expression);
    expression = '';
  } catch (error) {
    display.value = 'Error';
    expression = '';
  }
}