const hamburger = document.querySelector(".ham");
const menu = document.querySelector(".menu");

const item = document.querySelectorAll(".dropdown");
const itemText = document.querySelectorAll(".item-text");

for (let i = 0; i < itemText.length; i++) {
  itemText[i].addEventListener("click", () => {
    item.forEach((el) => {
      el.classList.remove("active");
    });

    item[i].classList.toggle("active");
  });
}

hamburger.addEventListener("click", () => {
  item.forEach((el) => {
    el.classList.remove("close");
  });
  menu.classList.toggle("active");
});
