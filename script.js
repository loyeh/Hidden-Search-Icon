const searchBox = document.getElementById("search");
const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  searchBox.classList.toggle("show");
  searchBox.focus();
});
