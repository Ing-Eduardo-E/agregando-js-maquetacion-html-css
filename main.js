// //*integramos la clase 11 y la 7, ahora voy a crear el código para que aparezca o desaparezca el menu de pequeño de navegación cuando haga clic en el correo electrónico en la parte superior derecha de la pantalla
// const navbarEmail = document.querySelector(".navbar-email");
// const desktopMenu = document.querySelector(".desktop-menu");

// //integramos la clase 8 a nuestro código, creamos varaibles para fusion menu hamburguesa y menu móvil
// const menuHamburguer = document.querySelector(".menu");
// const mobileMenu = document.querySelector(".mobile-menu");

// //integramamos la clase 13 Abrimos el carrito de compras
// const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
// const carritoCompras = document.querySelector("#shopingCartContainer");

// //integramos la clase 6 y creamos una variable para el contenedor de las tarjetas de los productos
// const cardsContainer = document.querySelector(".cards-container");

// //variable para llamar al aside de detalles del producto
// const detailProduct = document.querySelector("#productDetail");

// //*Variable para cerrar el aside de detalles del producto haciendo clic en la X
// const closeDetailProduct = document.querySelector(".product-detail-close");

// navbarEmail.addEventListener("click", toggleDestopMenu);
// menuHamburguer.addEventListener("click", toggleMobileMenu);
// navbarShoppingCart.addEventListener("click", toggleCarritoCompras);
// closeDetailProduct.addEventListener("click", closeProductDetail);

// //*Función que abre el menu del correo y esconde el menú del carrito de compras si esta activo
// function toggleDestopMenu() {
//   const iscarritoComprasClose = carritoCompras.classList.contains("inactive");
//   const isCloseProductDetail = detailProduct.classList.contains("inactive");
//   desktopMenu.classList.toggle("inactive");
//   if (!iscarritoComprasClose) {
//     carritoCompras.classList.add("inactive");
//   }
//   if (!isCloseProductDetail) {
//     detailProduct.classList.add("inactive");
//   }
// }

// //*La función toggleMobileMenu abre el menu hamburguesa y oculta el carrito de compras si esta activo
// function toggleMobileMenu() {
//   const iscarritoComprasClose = carritoCompras.classList.contains("inactive");
//   mobileMenu.classList.toggle("inactive");
//   if (!iscarritoComprasClose) {
//     carritoCompras.classList.add("inactive");
//   }
// }

// //!La función togglecarritoCompras abre el carrito de compras y oculta el menu hamburguesa, el menu del correo y el detalle del producto si estan activos
// function toggleCarritoCompras() {
//   const isMobileMenuClose = mobileMenu.classList.contains("inactive");
//   const isDesktopMenuClose = desktopMenu.classList.contains("inactive");
//   const isCloseProductDetail = detailProduct.classList.contains("inactive");
//   carritoCompras.classList.toggle("inactive");
//   if (!isMobileMenuClose) {
//     mobileMenu.classList.add("inactive");
//   }
//   if (!isDesktopMenuClose) {
//     desktopMenu.classList.add("inactive");
//   }
//   if (!isCloseProductDetail) {
//     detailProduct.classList.add("inactive");
//   }
// }

// //*Creamos la función para abrir el detalle del producto clase 6
// function openProductDetail() {
//   const iscarritoComprasClose = carritoCompras.classList.contains("inactive");
//   const isDesktopMenuClose = desktopMenu.classList.contains("inactive");
//   detailProduct.classList.remove("inactive");
//   if (!iscarritoComprasClose) {
//     carritoCompras.classList.add("inactive");
//   }
//   if (!isDesktopMenuClose) {
//     desktopMenu.classList.add("inactive");
//   }
// }

const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const carritoCompras = document.querySelector("#shopingCartContainer");
const titleCarritoCompras = document.querySelector(".title-container");
const cardsContainer = document.querySelector(".cards-container");
const detailProduct = document.querySelector("#productDetail");
const closeDetailProduct = document.querySelector(".product-detail-close");

navbarEmail.addEventListener("click", toggleDestopMenu);
menuHamburguer.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toggleCarritoCompras);
closeDetailProduct.addEventListener("click", closeProductDetail);
titleCarritoCompras.addEventListener("click", closeCarritoCompras);

function toggleDestopMenu() {
  toggleMenu(desktopMenu);
  hideMenu(carritoCompras);
  hideMenu(detailProduct);
}

function toggleMobileMenu() {
  toggleMenu(mobileMenu);
  hideMenu(carritoCompras);
}

function toggleCarritoCompras() {
  toggleMenu(carritoCompras);
  hideMenu(mobileMenu);
  hideMenu(desktopMenu);
  hideMenu(detailProduct);
}

function closeCarritoCompras() {
  hideMenu(carritoCompras);
}

function openProductDetail() {
  toggleMenu(detailProduct);
  hideMenu(carritoCompras);
  hideMenu(desktopMenu);
}

function toggleMenu(menu) {
  menu.classList.toggle("inactive");
}

function hideMenu(menu) {
  menu.classList.add("inactive");
}

//*Creamos la función para cerrar el detalle del producto clase 6
function closeProductDetail() {
  detailProduct.classList.add("inactive");
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

//Creamos una funcion para recorrer la lista de productos y creando un elemento por cada producto en la página Web
// function renderProductList(arr) {
//   for (product of arr) {
//     const productCard = document.createElement("div");
//     productCard.classList.add("product-card");

//     const productImage = document.createElement("img");
//     productImage.src = product.image;
//     productImage.alt = product.name;

//     const productInfo = document.createElement("div");
//     productInfo.classList.add("product-info");

//     const productDetails = document.createElement("div");

//     const productName = document.createElement("p");
//     productName.textContent = product.name;

//     const productPrice = document.createElement("p");
//     productPrice.textContent = `$${product.price.toFixed(2)}`;

//     const addToCartFigure = document.createElement("figure");
//     const addToCartImage = document.createElement("img");

//     addToCartImage.src = "./icons/bt_add_to_cart.svg";
//     addToCartImage.alt = "Add to cart";
//     addToCartFigure.appendChild(addToCartImage);

//     productDetails.appendChild(productPrice);
//     productDetails.appendChild(productName);

//     productInfo.appendChild(productDetails);
//     productInfo.appendChild(addToCartFigure);

//     productCard.appendChild(productImage);
//     productCard.appendChild(productInfo);

//     cardsContainer.appendChild(productCard);
//   }
// }

// //Llamamos a la función renderProductList y le pasamos la lista de productos
// renderProductList(productList);

//Esta función mejora el rendimiento de la función anterior, ya que en lugar de crear un elemento por cada producto, crea un solo elemento y lo agrega al DOM una sola vez.
function renderProductList(arr) {
  const html = arr
    .map(
      (product) => `
    <div class="product-card" onclick="openProductDetail()">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <div>
          <p>${product.name}</p>
          <p>$${product.price.toFixed(2)}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="Add to cart">
        </figure>
      </div>
    </div>
  `
    )
    .join("");
  cardsContainer.innerHTML = html;
}

renderProductList(productList);
