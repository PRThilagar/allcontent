function element() {
  let input = document.getElementById("start").value;
  let dateObj = new Date(input);
  let second = document.getElementById("first");

  let date = dateObj.getDate();
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  let hour = dateObj.getHours();
  let min = dateObj.getMinutes();

  second.innerHTML += `<div>${date >= 10 ? date : "0" + date}/${
    month >= 10 ? month : "0" + month
  }/${year} ${hour}:${min} ${hour > 12 ? "PM" : "AM"} 
  </div>`;
}

//${(date>0 && date<10) ? '0'+date : date}
//
