const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  //   console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  //   const sid = e.target.id;
  //   console.log(sid);
  if (id) {
    // remove active from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hife other article
    articles.forEach(function (article) {
      article.classList.remove("active");
      //   e.target.classList.add("active");
    });
    const element = document.getElementById(id);
    console.log(element);
    element.classList.add("active");
  }
});
