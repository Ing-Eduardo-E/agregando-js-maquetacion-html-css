//integramos la clase 11 y la 7, ahora voy a crear el código para que aparezca o desaparezca el menu de pequeño de navegación cuando haga clic en el correo electrónico en la parte superior derecha de la pantalla
const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navbarEmail.addEventListener("click", toggleDestopMenu);

//Esta función hace visible nuestro pequeño menu a la derecha, cuando haga clic en el correo
function toggleDestopMenu() {
  if (window.getComputedStyle(desktopMenu).display === "none") {
    desktopMenu.style.display = "block";
  } else {
    desktopMenu.style.display = "none";
  }
  //esta sería otra opcion que reemplaza el if, que coloca o quita la clase inactive
  //desktopMenu.classList.toggle("inactive");
}

