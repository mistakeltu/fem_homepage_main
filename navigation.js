const navDOM = document.querySelector(".nav-btn");
const toggleDOM = document.querySelector(".nav-toggle");

toggleDOM.addEventListener("click", () => {
  const visibility = navDOM.getAttribute("data-visible");
  if (visibility === "false") {
    navDOM.setAttribute("data-visible", true);
    toggleDOM.setAttribute("aria-expanded", true);
    toggleDOM.style.position = "fixed";
  } else {
    navDOM.setAttribute("data-visible", false);
    toggleDOM.setAttribute("aria-expanded", false);
    toggleDOM.style.position = "absolute";
  }
  console.log(visibility);
});
