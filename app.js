function appendToDisplay(value) {
  const display = document.getElementById("display");
  const lastChar = display.value.slice(-1);
  const operators = ['+', '-', '*', '/'];

 
  if (operators.includes(value) && operators.includes(lastChar)) {
    display.value = display.value.slice(0, -1) + value;

  } else {
    display.value += value;
  } 

}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (e) {
    document.getElementById("display").value = "Error";
  }
}

function cleardisplay() {
  document.getElementById("display").value = "";
}