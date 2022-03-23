import React, { useState, useEffect } from 'react';
import { useAuth } from '@hooks/useAuth'; // Auth methods
import { useRouter } from 'next/router'; // Redirect methods
import { Loading, ProductsList } from '@components/index';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api/index';

let PRODUCTS_LIMIT = 5;

const Products = () => {
  const route = useRouter();
  const auth = useAuth();
  const [productOffset, setProductOffset] = useState(0);
  const { data, isLoading } = useFetch(endPoints.products.getProducts(PRODUCTS_LIMIT, productOffset));
  const { data: totalData } = useFetch(endPoints.products.getProducts(0, 0));

  const handleUpdateProducts = (action) => {
    if (action === 'next') setProductOffset(productOffset + 5);
    if (action === 'back' && productOffset != 0) setProductOffset(productOffset - 5);
    console.log(action);
    console.log(productOffset);
  };

  const handleGoToPage = (page) => {
    if (page >= 1) setProductOffset(page * PRODUCTS_LIMIT - PRODUCTS_LIMIT);
  };

  // Redirects to main page if there is no user logged
  const checkIfLoggedIn = () => {
    if (!auth.user) {
      route.push('/');
    }
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto w-full">
      <ProductsList
        products={data}
        onUpdateProducts={handleUpdateProducts}
        currentPage={productOffset / PRODUCTS_LIMIT + 1}
        totalPages={Math.floor(totalData.length / PRODUCTS_LIMIT)}
        goToPage={handleGoToPage}
      />
    </div>
  );
};

export default Products;
