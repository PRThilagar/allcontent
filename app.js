// // fetch("https://fakestoreapi.com/products")
// //   .then((res) => res.json())
// //   .then((data) => first(data));

// // function first(source) {
// //   let input = document.getElementById("header");
// //   input.innerHTML += source.id;
// // }
// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => res.json())
//   .then((data) => first(data))
//   .catch((err) => console.log(err));

// function first(source) {
//   console.log(source);
//   let input = document.getElementById("new");

//   input.innerHTML += `<div>#ID${source.id}</div>
//                         <div>Title-${source.title}</div>
//                         <div>$${source.price}</div>
//                         <div>Description${source.description}</div>`;
// }

// fetch("https://fakestoreapi.com/products/2")
//   .then((res) => res.json())
//   .then((data) => second(data))
//   .catch((err) => console.log(err));

// function second(source) {
//   console.log(source);
//   let input = document.getElementById("two");

//   input.innerHTML += `<div>#ID${source.id}</div>
//                         <div>Title-${source.title}</div>
//                         <div>$${source.price}</div>
//                         <div>Description${source.description}</div>`;
// }
// fetch("https://fakestoreapi.com/products/3")
//   .then((res) => res.json())
//   .then((data) => third(data))
//   .catch((err) => console.log(err));

// function third(source) {
//   console.log(source);
//   let input = document.getElementById("three");

//   input.innerHTML += `<div>#ID${source.id}</div>
//                         <div>Title-${source.title}</div>
//                         <div>$${source.price}</div>
//                         <div>Description${source.description}</div>`;
// }

// fetch("https://fakestoreapi.com/products/4")
//   .then((res) => res.json())
//   .then((data) => four(data))
//   .catch((err) => console.log(err));

// function four(source) {
//   console.log(source);
//   let input = document.getElementById("four");

//   input.innerHTML += `<div>#ID${source.id}</div>
//                         <div>Title-${source.title}</div>
//                         <div>$${source.price}</div>
//                         <div>Description${source.description}</div>`;
// }

// fetch("https://fakestoreapi.com/products/5")
//   .then((res) => res.json())
//   .then((data) => five(data))
//   .catch((err) => console.log(err));

// function five(source) {
//   console.log(source);
//   let input = document.getElementById("five");

//   input.innerHTML += `<div>#ID${source.id}</div>
//                         <div>Title-${source.title}</div>
//                         <div>$${source.price}</div>
//                         <div>Description${source.description}</div>`;
// }

// fetch("https://fakestoreapi.com/products/6")
//   .then((res) => res.json())
//   .then((data) => six(data))
//   .catch((err) => console.log(err));

// function six(source) {
//   console.log(source);
//   let input = document.getElementById("six");

//   input.innerHTML += `<div>#ID${source.id}</div>
//                         <div>Title-${source.title}</div>
//                         <div>$${source.price}</div>
//                         <div>Description${source.description}</div>`;
// }

// fetch("https://fakestoreapi.com/products/7")
//   .then((res) => res.json())
//   .then((data) => seven(data))
//   .catch((err) => console.log(err));

// function seven(source) {
//   console.log(source);
//   let input = document.getElementById("seven");

//   input.innerHTML += `<div>#ID${source.id}</div>
//                         <div>Title-${source.title}</div>
//                         <div>$${source.price}</div>
//                         <div>Description${source.description}</div>`;
// }

// fetch("https://fakestoreapi.com/products/8")
//   .then((res) => res.json())
//   .then((data) => eight(data))
//   .catch((err) => console.log(err));

// function eight(source) {
//   console.log(source);
//   let input = document.getElementById("eight ");

//   input.innerHTML += `<div>#ID${source.id}</div>
//                         <div>Title-${source.title}</div>
//                         <div>$${source.price}</div>
//                         <div>Description${source.description}</div>`;
// }

function loadData() {
  fetch("https://api.npoint.io/54bb67d5cfbc0323cb71")
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        let parent = document.getElementById("grid");
        parent.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
          parent.innerHTML += ` <div class="card">
          <div class="img-container">
            <img class="item-img" src="${data[i].image}" />
          </div>
          <div class="detail-container">
            <div class="item-name" title="${data[i].title}">${data[i].title}</div>
            <div class="item-sub-name">${data[i].category}</div>
            <div class="item-price-container">
              <div class="item-final-price">$${data[i].price}</div>
              <div class="item-price">$${data[i].price}</div>
            </div>
            <div class="btn-container">
              <button class="add-to-cart">ADD</button>
            </div>
          </div>  
        </div>`;
        }
      }
    })
    .catch((err) => console.log(err));
}

function call() {
  let input = document.getElementById("get");

  input.innerHTML += `<div>
  <label for="id">Title:</label>
  <input type="text" id="one" />
  <label for="price">Price:</label>
  <input type="text" id="price" />
  <label for="description">Description:</label>
  <input type="text" id="des" />
  <label for="url">Enter an https:// URL:</label>
  <input type="url" id="url" />
  <label for="category">Category:</label>
  <input type="text" id="cat" />
  <button onclick="post()">Save</button>
</div>`;
}

function post() {
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({
      title: document.getElementById("one").value,
      price: parseInt(document.getElementById("price").value),
      description: document.getElementById("des").value,
      image: document.getElementById("url").value,
      category: document.getElementById("cat").value,
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
  remove();
}

function remove() {
  let str = document.getElementById("one");
  str.value = "";
  let str1 = document.getElementById("des");
  str1.value = "";
  let str2 = document.getElementById("url");
  str2.value = "";
  let str3 = document.getElementById("cat");
  str3.value = "";
  let str4 = document.getElementById("price");
  str4.value = "";
}
