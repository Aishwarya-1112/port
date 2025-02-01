const menuItems = document.querySelector(".nav-bar"); // Select all <a> tags in the nav bar
const burgermenu = document.querySelector(".burger-menu");
burgermenu.addEventListener("click", () => {
  if (menuItems.style.display == "none") {
    menuItems.style.display = "block";
  } else {
    menuItems.style.display = "none";
  }
});
