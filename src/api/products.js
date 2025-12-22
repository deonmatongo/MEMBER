import productsData from '../data/products.json';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Get all products
export const getProducts = async () => {
  await delay(300); // Simulate network delay
  // Sort by created_date descending (newest first)
  return [...productsData].sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
};

// Get product by ID
export const getProductById = async (id) => {
  await delay(200); // Simulate network delay
  return productsData.find(product => product.id === id) || null;
};

// Filter products (for compatibility with existing code)
export const filterProducts = async (filters) => {
  await delay(200); // Simulate network delay
  let filtered = [...productsData];
  
  if (filters.id) {
    filtered = filtered.filter(product => product.id === filters.id);
  }
  
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(product => product.category === filters.category);
  }
  
  return filtered;
};

