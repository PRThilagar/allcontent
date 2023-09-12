let arr = [12, 34, 34, 78, 11, 66, 49];
let average = 0;
for (let i = 0; i < arr.length; i++) {
  average += arr[i] / arr.length;
}
console.log(average);
