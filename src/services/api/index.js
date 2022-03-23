import config from '@config/index';

const endPoints = {
  auth: {
    login: `${config.apiUrl}/api/${config.apiVersion}/auth/login`,
    profile: `${config.apiUrl}/api/${config.apiVersion}/auth/profile`,
  },
  products: {
    getProducts: (limit, offset) => `${config.apiUrl}/api/${config.apiVersion}/products?limit=${limit}&offset=${offset}`,
    getProduct: (id) => `${config.apiUrl}/api/${config.apiVersion}/products/${id}`,
    AddProduct: `${config.apiUrl}/api/${config.apiVersion}/products`,
    getProductsByCategory: (categoryId) => `${config.apiUrl}/api/${config.apiVersion}/categories/${categoryId}/products`,
  },
  categories: {
    getCategories: `${config.apiUrl}/api/${config.apiVersion}/categories`,
    getCategory: (id) => `${config.apiUrl}/api/${config.apiVersion}/categories/${id}`,
  },
};

export default endPoints;
