// src/api/products.js
import axios from 'axios';

const BASE_URL = 'https://cart-api.alexrodriguez.workers.dev';

export async function fetchAllProducts() {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
}

export async function fetchProductById(id) {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
}