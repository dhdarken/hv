document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-button").addEventListener("click", showMenu);
  document.getElementById("close-menu").addEventListener("click", closeMenu);

  function showMenu() {
    const menu = document.querySelector("section.menu");
    menu.style.height = "100%";
  }
  function closeMenu() {
    const menu = document.querySelector("section.menu");
    menu.style.height = "0";
    menu.style.overflox = "none";
  }
});
