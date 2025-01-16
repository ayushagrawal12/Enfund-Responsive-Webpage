// script.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleMenuButton = document.getElementById("toggleMenu");
    const menuList = document.getElementById("menuList");
  
    // Toggle menu visibility
    toggleMenuButton.addEventListener("click", () => {
      menuList.classList.toggle("hidden");
    });
  
    // Adjust page width based on screen size
    function adjustPageWidth() {
      const width = window.innerWidth;
      const container = document.querySelector(".container");
  
      if (width >= 992 && width <= 1600) {
        container.style.transform = "scale(0.9)";
      } else if (width >= 700 && width <= 767) {
        container.style.transform = "scale(0.8)";
      } else if (width >= 600 && width <= 700) {
        container.style.transform = "scale(0.75)";
      } else if (width <= 600) {
        container.style.transform = "scale(0.5)";
      } else {
        container.style.transform = "scale(1)";
      }
    }
  
    // Call the function on load and resize
    adjustPageWidth();
    window.addEventListener("resize", adjustPageWidth);
  });
  