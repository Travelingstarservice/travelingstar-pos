import { API_BASE_URL } from './config';

function fetchProducts() {
  fetch(`${API_BASE_URL}/api/products`)
    .then(res => res.json())
    .then(data => {
      console.log("Products from backend:", data);
      // You can render them to the page if using React:
      // setProducts(data);
    })
    .catch(err => console.error("Error fetching products:", err));
}

// Call fetch function
fetchProducts();

