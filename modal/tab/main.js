"use strict";

{
const tabLabels = document.querySelectorAll(".tab__label li a");
const tabContents = document.querySelectorAll(".tab__content");

tabLabels.forEach((clickedLabel) => {
  clickedLabel.addEventListener("click", e => {
    e.preventDefault();

    //一旦、すべての要素のactive外す
    tabLabels.forEach(label => {
      label.classList.remove('active');
    });

    //clickされた要素だけ色をつける（active）
    clickedLabel.classList.add('active');

    //中身のactiveもすべて外す
    tabContents.forEach(content => {
      content.classList.remove('active');
    });

    document.getElementById(clickedLabel.dataset.id).classList.add('active');

  });
});

}