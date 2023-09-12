let responseData = [];
let score = 0;
let activeIndex = 0;

fetch("https://api.npoint.io/82cfbb4116138a133de8")
  .then((res) => res.json())
  .then((data) => {
    responseData = data;
    let prevbtn = document.getElementById("back");
    prevbtn.disabled = true;
    display(activeIndex);
  });

function display(activeIndex) {
  let input = document.getElementById("que");
  input.innerHTML = `<div>${activeIndex + 1}.${
    responseData[activeIndex].question
  }</div>`;
  for (let i = 0; i < responseData[activeIndex].option.length; i++) {
    input.innerHTML += `<div><input type="radio" id="huey" onchange="selectedValue$ name="${activeIndex}" value="huey"  />
    <label for="huey">${responseData[activeIndex].option[i].displayvalue}</label></div>`;
  }
  for (let i = 0; i < responseData.length; i++) {
    input.innerHTML += `<div><button onclick="display(${i})">${
      i + 1
    }</button></div>`;
  }
}

function selectedValue(i, j) {
  for (let k = 0; k < responseData[i].option.length; k++) {
    responseData[i].option[k].isSelected = false;
  }
  responseData[i].option[j].isSelected = true;
}

function getValue() {
  for (let i = 0; i < responseData.length; i++) {
    for (let j = 0; j < responseData[i].option.length; j++) {
      if (
        responseData[i].option[j].isSelected === true &&
        responseData[i].option[j].isValidAnswer === true
      ) {
        score++;
      }
    }
  }
  alert(score);
}

function pageChangeHandler(action) {
  let prevbtn = document.getElementById("back");
  let nextbtn = document.getElementById("next");
  if (action === "next") {
    activeIndex = activeIndex + 1;
  } else {
    activeIndex = activeIndex - 1;
  }
  if (activeIndex === 0 && activeIndex < responseData.length - 1) {
    prevbtn.disabled = true;
    nextbtn.disabled = false;
  } else if (activeIndex > 0 && activeIndex < responseData.length - 1) {
    prevbtn.disabled = false;
    nextbtn.disabled = false;
  } else if (activeIndex > 0 && activeIndex === responseData.length - 1) {
    prevbtn.disabled = false;
    nextbtn.disabled = true;
  } else {
    prevbtn.disabled = true;
    nextbtn.disabled = true;
  }
  display(activeIndex);
}

for (let i = 0; i < responseData.length; i++) {
  input.innerHTML += `<div><button onclick="display(activeIndex)">${activeIndex}</button></div>`;
}
