import { API_BASE_URL } from './config';

const productsContainer = document.getElementById("products-container");
const customersContainer = document.getElementById("customers-container");

function fetchProducts() {
  fetch(`${API_BASE_URL}/api/products`)
    .then(res => res.json())
    .then(data => {
      productsContainer.innerHTML = "";
      data.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-item";
        div.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p>`;
        productsContainer.appendChild(div);
      });
    })
    .catch(err => console.error(err));
}

function fetchCustomers() {
  fetch(`${API_BASE_URL}/api/customers`)
    .then(res => res.json())
    .then(data => {
      customersContainer.innerHTML = "";
      data.forEach(customer => {
        const div = document.createElement("div");
        div.className = "customer-item";
        div.innerHTML = `<h4>${customer.name}</h4><p>${customer.email}</p>`;
        customersContainer.appendChild(div);
      });
    })
    .catch(err => console.error(err));
}

// Fetch data on page load
fetchProducts();
fetchCustomers();

