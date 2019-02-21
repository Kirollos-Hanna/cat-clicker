let clicks = document.querySelector(".clicks");
let catPic = document.querySelectorAll(".picture");
let catName = document.querySelectorAll(".name");
let names = ["Deen", "Bark", "Homer"];
let cats = [];
let counter = 0;

for (let i = 0; i < catPic.length; i++) {
  cats.push({ name: names[i], pic: catPic[i] });
  catName[i].innerText = names[i];
  catPic[i].addEventListener(
    "click",
    () => {
      counter += 1;
      clicks.innerText = counter;
    },
    false
  );
}
