//integramos la clase 11 y la 7, ahora voy a crear el código para que aparezca o desaparezca el menu de pequeño de navegación cuando haga clic en el correo electrónico en la parte superior derecha de la pantalla
const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
//integramos la clase 8 a nuestro código, creamos varaibles para sufion
const menuHamburguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navbarEmail.addEventListener("click", toggleDestopMenu);
menuHamburguer.addEventListener("click", toggleMobileMenu);

//Esta función hace visible nuestro pequeño menu a la derecha, cuando haga clic en el correo
function toggleDestopMenu() {
  desktopMenu.classList.toggle("inactive");
}

//Esta función hace visible nuestro menu hamburguesa
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}

