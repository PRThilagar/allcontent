let value = "";

function runClock() {
  let display = document.querySelector(".clock");
  let time = new Date();
  let hrs = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  let show = "AM";
  if (hrs > 12) {
    hrs = hrs - 12;
    show = "PM";
  } else if (hrs === 0) {
    hrs = 12;
    show = "AM";
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;
  display.innerHTML = `${hrs}:${mins}:${secs} ${show}`;
  value = `${hrs}:${mins}:${secs} ${show}`;
}

runClock();
setInterval(runClock, 1000);

function display() {
  let view = document.getElementById("second");
  view.innerHTML += `<div>${value}</div>`;
}
