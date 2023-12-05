//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");

questions.forEach(function (que) {
  //   console.log(que);
  const btn = que.querySelector(".question-btn");
  //   console.log(btn);
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== que) {
        item.classList.remove("show-text");
      }
    });
    que.classList.toggle("show-text");
  });
});

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (i) {
//   i.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
