//integramos la clase 11 y la 7, ahora voy a crear el código para que aparezca o desaparezca el menu de pequeño de navegación cuando haga clic en el correo electrónico en la parte superior derecha de la pantalla
const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
//integramos la clase 8 a nuestro código, creamos varaibles para sufion
const menuHamburguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
//integramamos la clase 13 a nuestro código y creamos la fusión entre esta y la principal
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");

navbarEmail.addEventListener("click", toggleDestopMenu);
menuHamburguer.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toggleAsideProductDetail);

//Esta función hace visible nuestro pequeño menu a la derecha, cuando haga clic en el correo
function toggleDestopMenu() {
  const isAsideproductDetailClose =
    asideProductDetail.classList.contains("inactive");
  desktopMenu.classList.toggle("inactive");
  if (!isAsideproductDetailClose) {
    asideProductDetail.classList.add("inactive");
  }
}

//Esta función hace visible nuestro menu hamburguesa
//La función toggleMobileMenu cambia el estado de la clase "inactive" en el elemento mobileMenu. Si asideProductDetail no tiene la clase "inactive", entonces se le agrega esa clase.
function toggleMobileMenu() {
  const isAsideproductDetailClose =
    asideProductDetail.classList.contains("inactive");
  mobileMenu.classList.toggle("inactive");
  if (!isAsideproductDetailClose) {
    asideProductDetail.classList.add("inactive");
  }
}

//La función toggleAsideProductDetail muestra u oculta el detalle del producto y cierra el menú móvil si está abierto.
function toggleAsideProductDetail() {
  const isMobileMenuClose = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClose = desktopMenu.classList.contains("inactive");
  asideProductDetail.classList.toggle("inactive");
  if (!isMobileMenuClose) {
    mobileMenu.classList.add("inactive");
  }
  if (!isDesktopMenuClose) {
    desktopMenu.classList.add("inactive");;
  }
}
