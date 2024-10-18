document.getElementById("hamburger").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
  
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        overlay.style.display = "none";
    } else {
        menu.classList.add("open");
        overlay.style.display = "block";
    }
  });
  
  document.getElementById("overlay").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    menu.classList.remove("open");
    overlay.style.display = "none";
  });