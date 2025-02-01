let menuItems = document.querySelectorAll("#nav-bar a"); // Select all <a> tags in the nav bar

document.querySelector("burger-menu").addEventListener("click", () => {
  menuItems.forEach((item) => item.classList.toggle("showmenu")); // Toggle showmenu on each item
});
