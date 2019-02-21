let clicks = document.querySelector(".clicks");
let catPic = document.querySelector(".picture");
let counter = 0;

catPic.addEventListener(
  "click",
  () => {
    counter += 1;
    clicks.innerText = counter;
  },
  false
);
