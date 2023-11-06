//integramos la clase 11 y la 7, ahora voy a crear el código para que aparezca o desaparezca el menu de pequeño de navegación cuando haga clic en el correo electrónico en la parte superior derecha de la pantalla
const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
//integramos la clase 8 a nuestro código, creamos varaibles para sufion
const menuHamburguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
//integramamos la clase 13 a nuestro código y creamos la fusión entre esta y la principal
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");
//integramos la clase 6 y creamos una variable para el contenedor de las tarjetas
const cardsContainer = document.querySelector(".cards-container");

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
    desktopMenu.classList.add("inactive");
  }
}

//Creamos código para agregar productos a la página y que se llene automáticamente, relacionado con la clase 6

const productList = [];

//Agregamos productos a la lista de productos
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Monopatineta",
  price: 130,
  image:
    "https://http2.mlstatic.com/D_NQ_NP_912206-MCO47574546679_092021-O.webp",
});

productList.push({
  name: "Patineta Eléctrica",
  price: 180,
  image:
    "https://http2.mlstatic.com/D_NQ_NP_2X_967663-MLU71574173262_092023-F.webp",
});

productList.push({
  name: "Triciclo",
  price: 80,
  image:
    "https://http2.mlstatic.com/D_NQ_NP_820155-MLA48481276894_122021-O.webp",
});

productList.push({
  name: "Carrito de Pedal",
  price: 125,
  image:
    "https://http2.mlstatic.com/D_NQ_NP_769141-MCO52109910466_102022-O.webp",
});

//Recoriendo la lista de productos y creando un elemento por cada producto en la página Web
function renderProductList(arr) {
  for (product of arr) {
  
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const productDetails = document.createElement("div");
  
    const productName = document.createElement("p");
    productName.textContent = product.name;
  
    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price.toFixed(2)}`;
  
    const addToCartFigure = document.createElement("figure");
    const addToCartImage = document.createElement("img");
    
    addToCartImage.src = "./icons/bt_add_to_cart.svg";
    addToCartImage.alt = "Add to cart";
    addToCartFigure.appendChild(addToCartImage);
  
    productDetails.appendChild(productPrice);
    productDetails.appendChild(productName);
  
    productInfo.appendChild(productDetails);
    productInfo.appendChild(addToCartFigure);
  
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProductList(productList);