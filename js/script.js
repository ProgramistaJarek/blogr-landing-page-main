const hamburger = document.querySelector(".ham");
const menu = document.querySelector(".menu");

const item = document.querySelectorAll(".dropdown");
const itemText = document.querySelectorAll(".item-text");

let double = 0;
let text = "";

for (let i = 0; i < itemText.length; i++) {
  itemText[i].addEventListener("click", () => {
    double++;

    item.forEach((el) => {
      el.classList.remove("active");
    });
    item[i].classList.toggle("active");

    if (itemText[i].textContent == text && double == 2) {
      item[i].classList.remove("active");
      double = 0;
    }

    if (double == 2) double = 0;
    text = itemText[i].textContent;
  });
}

hamburger.addEventListener("click", () => {
  item.forEach((el) => {
    el.classList.remove("close");
  });
  menu.classList.toggle("active");
});

// for (let i = 0; i < itemText.length; i++) {
//   itemText[i].addEventListener("click", () => {
//     item.forEach((el) => {
//       el.classList.remove("active");
//     });

//     item[i].classList.toggle("active");
//   });
// }
