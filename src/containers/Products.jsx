import React, { useState, useEffect } from 'react';
import { useAuth } from '@hooks/useAuth'; // Auth methods
import { useRouter } from 'next/router'; // Redirect methods
import { AddProductModal, Loading, Modal, ProductsList } from '@components/index';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api/index';

let PRODUCTS_LIMIT = 5;

const Products = () => {
  const route = useRouter();
  const auth = useAuth();
  const [productOffset, setProductOffset] = useState(0);
  const { data, isLoading } = useFetch(endPoints.products.getProducts(PRODUCTS_LIMIT, productOffset));
  // const { data, isLoading } = useFetch('https://nodejs-ecommerce-test.herokuapp.com/api/v1/products');
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
    <>
      <div className="flex justify-end relative h-12">
        {/* Button to open "Add Product" modal */}
        <label htmlFor="add-product-modal" className="btn btn-primary text-white rounded-b-none no-animation transition-all gap-2 absolute -bottom-2 hover:bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Añadir un producto
        </label>
        {/* "Add Product" Modal */}
        <Modal id="add-product-modal">
          <AddProductModal />
        </Modal>
      </div>
      <ProductsList
        products={data}
        onUpdateProducts={handleUpdateProducts}
        currentPage={productOffset / PRODUCTS_LIMIT + 1}
        totalPages={Math.floor(totalData.length / PRODUCTS_LIMIT)}
        goToPage={handleGoToPage}
      />
    </>
  );
};

export default Products;
