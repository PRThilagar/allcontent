let previousValue = 0;
let operation = 0;

function display(num) {
  let get = document.getElementById("search");
  get.value += num;
}

function clearInput() {
  let del = document.getElementById("search");
  del.value = "0";
}

function sum() {
  let search = document.getElementById("search");
  previousValue = search.value;
  operation = "add";
  search.value = "";
  console.log(previousValue);
}

function multiply() {
  let search = document.getElementById("search");
  previousValue = search.value;
  operation = "multiply";
  search.value = 0;
  console.log(previousValue);
}

function minus() {
  let search = document.getElementById("search");
  previousValue = search.value;
  operation = "minus";
  search.value = 0;
  console.log(previousValue);
}

function divide() {
  let search = document.getElementById("search");
  previousValue = search.value;
  operation = "divide";
  search.value = 0;
  console.log(previousValue);
}

function modulus() {
  let search = document.getElementById("search");
  previousValue = search.value;
  operation = "modulus";
  search.value = "";
  console.log(previousValue);
}

function final() {
  if (operation === "add") {
    let ans = document.getElementById("search");
    lastvalue = ans.value;
    let solution = parseInt(previousValue) + parseInt(lastvalue);
    ans.value = solution;
  }
}
