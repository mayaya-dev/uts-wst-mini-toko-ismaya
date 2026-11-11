import { addProduct, calculateTotal } from "./cart.js";

const productsContainer = document.querySelector("#products");
const productStatus = document.querySelector("#product-status");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const totalLabel = document.querySelector("#total");
const clearCartButton = document.querySelector("#clear-cart");

let products = [];
let cart = [];

const rupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

function renderProducts() {
  productsContainer.innerHTML = products
    .map(
      (product) => `
    <article class="product-card">
      <div class="product-illustration">${product.icon}</div>
      <div class="product-tag">${product.tag}</div>
      <h3>${product.name}</h3>
      <p class="product-price">${rupiah(product.price)}</p>
      <button class="add-button" data-id="${product.id}" type="button">+ Tambah ke Keranjang</button>
    </article>
  `,
    )
    .join("");
  document.querySelectorAll(".add-button").forEach((button) => {
    button.addEventListener("click", () => {
      const product = products.find(
        (item) => item.id === Number(button.dataset.id),
      );
      if (product) {
        cart = addProduct(cart, product);
        renderCart();
      }
    });
  });
}

function renderCart() {
  cartCount.textContent = `${cart.reduce((count, item) => count + item.quantity, 0)} barang`;
  cartItems.innerHTML = cart.length
    ? cart
        .map(
          (item) =>
            `<div class="cart-line"><span>${item.name}<small>${item.quantity} × ${rupiah(item.price)}</small></span><strong>${rupiah(item.price * item.quantity)}</strong></div>`,
        )
        .join("")
    : "<p>Belum ada barang.</p>";
  totalLabel.textContent = rupiah(calculateTotal(cart));
}

async function loadProducts() {
  products = [
    { id: 1, name: "Mouse Nirkabel", price: 75000, icon: "M", tag: "Aksesori" },
    { id: 2, name: "Papan Ketik", price: 150000, icon: "K", tag: "Perangkat" },
    { id: 3, name: "Lampu Meja", price: 90000, icon: "L", tag: "Perlengkapan" },
    { id: 4, name: "Dudukan Laptop", price: 120000, icon: "D", tag: "Aksesori" },
  ];

  productStatus.textContent = `${products.length} produk tersedia`;
  renderProducts();
}

clearCartButton.addEventListener("click", () => {
  cart = [];
  renderCart();
});
renderCart();
loadProducts();
