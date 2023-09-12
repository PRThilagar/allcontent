function listener() {
  let searchText = document.getElementById("one").value;
  fetch(`https://api.github.com/users/${searchText}`)
    .then((res) => res.json())
    .then((data) => second(searchText))
    .catch((err) => console.log(err));
}

function second(value) {
  fetch(`https://api.github.com/users/${value}/repos`)
    .then((res) => res.json())
    .then((data) => third(data))
    .catch((err) => console.log(err));
}

function third(output) {
  let list = document.getElementById("list");
  list.innerHTML = "";            
  for (let i = 0; i < output.length; i++) {
    list.innerHTML += `<li>${output[i].name}</li>`;
  }
}
