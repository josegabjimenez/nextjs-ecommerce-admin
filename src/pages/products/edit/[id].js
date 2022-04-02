import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AddProductModal } from '@components/index';
import axios from 'axios';
import endPoints from '@services/api/index';
import { useAuth } from '@hooks/useAuth';

const Edit = () => {
  const [product, setProduct] = useState({});
  const route = useRouter();
  const auth = useAuth();

  //   useEffect(() => {
  //     // Redirects to main page if there is no user logged
  //     const checkIfLoggedIn = () => {
  //       if (!auth.user) {
  //         route.push('/');
  //       }
  //     };

  //     checkIfLoggedIn();
  //   }, []);

  useEffect(() => {
    if (!route.isReady) return;
    const { id } = route.query;
    // Fetch product
    const getProduct = async () => {
      const { data } = await axios.get(endPoints.products.getProduct(id));
      setProduct(data);
    };

    getProduct();
  }, [route.isReady, route.query]);

  console.log(product);

  return (
    <div>
      <AddProductModal product={product} />
    </div>
  );
};

export default Edit;
