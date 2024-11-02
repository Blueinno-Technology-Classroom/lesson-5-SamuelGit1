// console.log("testing log");
// console.warn("testing warn");
// console.error("testing error");

// alert("testing alert")
// prompt("testing propmt")

// function onTimeOut() {
//   console.log("This is run after 1 second");
// }
// setTimeout(onTimeOut, 1000);

// * Periodic actions
// let intervalId = null;
// let countDown = 10;
// function onInterval() {
//   countDown -= 1;
//   console.log(countDown);

//   if (countDown <= 0) {
//     clearInterval(intervalId);
//   }
// }
// intervalId = setInterval(onInterval, 1000);

// let clickCount = 0;
// let button1 = document.getElementById("button1");
// function onButton1Clicked() {
//   console.log("Button1 clicked");
//   clickCount += 1;
//   button1.textContent = "Clicked ${clickCount} times";
// }
// button1.addEventListener("click", onButton1Clicked);

let button1 = document.getElementById("button1");
function onButton1Clicked() {
  clearInterval(intervalId);
}

let intervalId = null;
let countDown = 10;
button1.addEventListener("click", onButton1Clicked);
function onInterval() {
  button1.innerHTML = countDown
  countDown -= 1;

  if (countDown <= 0) {
    window.open("http://127.0.0.1:5500/public/");
    clearInterval(intervalId);
  }
}
intervalId = setInterval(onInterval, 1000);
