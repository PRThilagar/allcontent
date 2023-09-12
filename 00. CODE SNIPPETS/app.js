// String reverse
// let basestr = "Hello";
// let str2 = "";
// for (let i = basestr.length - 1; i >= 0; i--) {
//   str2 += basestr[i];
// }
// console.log(str2);

// Convert"Hello" to "Ifmmp"
// function nextone (str){
//     // let str = x;
//     let str1 = "";
//     let emp = "";
//     for (let i = 0; i < str.length; i++) {
//         str1 = str.charCodeAt(i);
//         if (str1 === 90 || str1 === 122) {
//             emp += String.fromCharCode(str1 - 25);
//         } else {
//             emp += String.fromCharCode(str1 + 1);
//         }
//     }
//     return emp;
// }

// nextone("freddd");
// let arr = [10, 20, 30, 40, 50, 60];
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 20 && arr[i] < 60) {
//     arr1.push(arr[i]);
//   }
// }
// console.log(arr1);

//  finding the largest element in Array

// let arr = [10, 45, 33, 100, 45, 77];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

//  finding the minimum value of an array

// let arr = [10, 45, 33, 100, 5, 45, 77];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
//  console.log(min);
// const arr = [12, 345, 23, 23, 12, 67];

// console.log(Math.max(...arr));

// finding second largest eleme in array
// let arr = [10, 45, 33, 100, 45, 77, 88];
// let max = arr[0];
// let secondLargest = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   } else if (arr[i] > secondLargest) {
//     secondLargest = arr[i];
//   }
// }
// console.log(secondLargest);

// Two dimensional array
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i][i]);
// }

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// arr2 = "";
// for (let i = 0; i < arr.length; i++) {
//   arr2 = arr[i];
//   for (let j = 0; j < arr2.length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// Guessing game
// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt("Enter your first guess! (Type 'q' to quit)");
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     guess = parseInt(guess);
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:");
//         attempts++;
//     } else if (guess < targetNum) {
//         guess = prompt("Too low! Enter a new guess:");
//         attempts++;
//     } else {
//         guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
//     }
// }

// if (guess === 'q') {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log("CONGRATS YOU WIN!")
//     console.log(`You got it! It took you ${attempts} guesses`)
// }

let data = [
  {
    name: "Thomas",
    age: 33,
    salary: 13000,
  },
  {
    name: "Vikram",
    age: 33,
    salary: 30000,
  },
  {
    name: "Saleem",
    age: 33,
    salary: 40000,
  },
  {
    name: "Vivek",
    age: 40,
    salary: 2000,
  },
  {
    name: "Joe",
    age: 25,
    salary: 23000,
  },
];
function newtable() {
  let table = document.getElementById("one");
  for (let i = 0; i < data.length; i++) {
    table.innerHTML += `<tr>
             <td>${data[i].name}</td>
             <td>${data[i].age}</td>
             <td>${data[i].salary}</td>
            </tr>`;
  }
}

function calculate(a, b, op) {
  if (op === "add") {
    let c = a + b;
    return c;
  }
  if (op === "mul") {
    let c = a * b;
    return c;
  }
}
calculate(10, 20, "add");
calculate(10, 20, "mul");
