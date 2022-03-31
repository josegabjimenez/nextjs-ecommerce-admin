import axios from 'axios';
import endPoints from '@services/api/index';

const addProduct = async (product) => {
  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const { data } = await axios.post(endPoints.products.AddProduct, product, options);

  return data;
};

export { addProduct };