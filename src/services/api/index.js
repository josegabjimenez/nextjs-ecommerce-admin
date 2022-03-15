import config from '@config/index';

const endPoints = {
  auth: {
    login: `${config.apiUrl}/api/${config.apiVersion}/auth/login`,
    profile: `${config.apiUrl}/api/${config.api}/auth/profile`,
  },
  products: {
    getProducts: `${config.apiUrl}/api/${config.apiVersion}/products`,
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
