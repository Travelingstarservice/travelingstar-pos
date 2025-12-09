let cart = [];
const backendURL = 'https://YOUR_BACKEND_URL_ON_RENDER_OR_RAILWAY'; // Replace with your live backend URL

async function loadProducts() {
  const res = await fetch(`${backendURL}/products`);
  const products = await res.json();
  const container = document.getElementById('products');
  container.innerHTML = '';
  products.forEach(p => {
    const div = document.createElement('div');
    div.innerHTML = `${p.name} - $${p.price} (Stock: ${p.stock}) <button onclick="addToCart(${p.id})">Add</button>`;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.quantity++;
  else cart.push({id, quantity:1});
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart');
  container.innerHTML = '';
  cart.forEach(i => {
    container.innerHTML += `ID: ${i.id}, Qty: ${i.quantity}<br>`;
  });
}

async function checkout() {
  await fetch(`${backendURL}/checkout`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({items: cart})
  });
  alert('Sale completed!');
  cart = [];
  renderCart();
  loadProducts();
}

loadProducts();
