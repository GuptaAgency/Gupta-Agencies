let cart = [];

// Toggle cart visibility
function toggleCart() {
  document.getElementById("cart-panel").classList.toggle("active");
}

// Close cart
function closeCart() {
  document.getElementById("cart-panel").classList.remove("active");
}

// Add product to cart
function addToCart(product, price) {
  let item = cart.find(i => i.product === product);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ product, price, quantity: 1 });
  }
  updateCart();
}

// Update cart display
function updateCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    let li = document.createElement("li");
    li.innerHTML = `
      ${item.product} - ₹${item.price} x ${item.quantity}
      <button onclick="increaseQty(${index})">+</button>
      <button onclick="decreaseQty(${index})">-</button>
      <button onclick="removeItem(${index})">❌</button>
    `;
    cartItems.appendChild(li);
  });

  document.getElementById("cart-total").textContent = total;
  document.getElementById("cart-count").textContent = cart.length;
}

// Increase quantity
function increaseQty(index) {
  cart[index].quantity++;
  updateCart();
}

// Decrease quantity
function decreaseQty(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }
  updateCart();
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}
