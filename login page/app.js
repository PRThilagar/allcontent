let arr = [];
let selectedIndex = "";
function one() {
  let str = document.getElementById("name");
  str.value = "";
  let str1 = document.getElementById("pass");
  str1.value = "";
  let str2 = document.getElementById("mob");
  str2.value = "";
}
function setDefault() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log("Hello");
      arr = data;
      document.getElementById("make").setAttribute("disabled", "true");
      display();
    });
  console.log("Hiiiii");
  // arr = [{ "name": "thilagar", "password": 12345678, "mobno": 764452654 }];
}

function plus() {
  let person = {};
  person.name = document.getElementById("name").value;
  person.password = document.getElementById("pass").value;
  person.mobno = document.getElementById("mob").value;
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
             <td>${arr[i].name}</td>
             <td>${arr[i].password}</td>
             <td>${arr[i].mobno}</td>
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
  document.getElementById("name").value = arr[i].name;
  document.getElementById("pass").value = arr[i].passsword;
  document.getElementById("mob").value = arr[i].mobno;
}
function store() {
  selectedIndex = document.getElementById("name");
  selectedIndex = document.getElementById("pass");
  selectedIndex = document.getElementById("mob");
}

function active() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("pass").value;
  let mobno = document.getElementById("mob").value;
  if (name && password && mobno) {
    document.getElementById("make").removeAttribute("disabled");
  } else {
    document.getElementById("make").setAttribute("disabled", "true");
  }
}
