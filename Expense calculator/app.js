function showDiv() {
  document.getElementById("second").style.display = "block";
}

let arr = [];
let selectedIndex = "";
let income = 0;

function one() {
  let str = document.getElementById("num");
  str.value = "";
  let str1 = document.getElementById("pass");
  str1.value = "";
  let str2 = document.getElementById("amt");
  str2.value = "";
  let str3 = document.getElementById("des");
  str3.value = "";
}

function plus() {
  let person = {};
  person.totalincome = document.getElementById("num").value;
  person.transactiontype = document.getElementById("pass").value;
  person.amount = document.getElementById("amt").value;
  person.description = document.getElementById("des").value;

  arr.push(person);
  console.log(arr);
  display();
  one();
  active();
}

function display() {
  let table = document.getElementById("one");
  table.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    table.innerHTML += `<tr>
             
             <td>${arr[i].totalincome}</td>
             <td>${arr[i].transactiontype}</td>
             <td>${arr[i].amount}</td>
             <td>${arr[i].description}</td>
             <td><button onclick="remove(${i})">DELETE</button></td>
             <td><button onclick="sel(${i})">SELECT</button></td>
             
            </tr>`;
  }
}
function remove(i) {
  arr.splice(i, 1);
  console.log(arr);
  display();
}

function sel(i) {
  selectedIndex = i;
  document.getElementById("num").value = arr[i].totalincome;
  document.getElementById("pass").value = arr[i].transactiontype;
  document.getElementById("amt").value = arr[i].amount;
  document.getElementById("des").value = arr[i].description;
}
