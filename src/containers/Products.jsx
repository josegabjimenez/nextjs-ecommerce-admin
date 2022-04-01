import React, { useState, useEffect } from 'react';
import { AddProductModal, Loading, Modal, ProductsList, Alert } from '@components/index';
import endPoints from '@services/api/index';

// hooks 🪝
import { useRouter } from 'next/router'; // Redirect methods
import { useAuth } from '@hooks/useAuth'; // Auth methods
import useFetch from '@hooks/useFetch';
import useAlert from '@hooks/useAlert';
import useModal from '@hooks/useModal';

let PRODUCTS_LIMIT = 5;

const Products = () => {
  // hooks
  const { modal, setModal } = useModal(); // Modal methods
  const { alert, setAlert, toggleAlert } = useAlert(); // Alert methods
  const route = useRouter(); // Redirect methods
  const auth = useAuth(); // Auth methods
  const [productOffset, setProductOffset] = useState(0); // Pagination
  const { data, isLoading } = useFetch(endPoints.products.getProducts(PRODUCTS_LIMIT, productOffset)); // Fetch products with pagination
  const { data: totalData } = useFetch(endPoints.products.getProducts(0, 0)); // Fetch total products

  // Fetch products by pagination using offset and limit
  const handleUpdateProducts = (action) => {
    if (action === 'next') setProductOffset(productOffset + 5);
    if (action === 'back' && productOffset != 0) setProductOffset(productOffset - 5);
  };

  // Fetch products by a given page number
  const handleGoToPage = (page) => {
    if (page >= 1) setProductOffset(page * PRODUCTS_LIMIT - PRODUCTS_LIMIT);
  };

  // Redirects to main page if there is no user logged
  useEffect(() => {
    // Checks if there is a user logged
    if (!auth.user) {
      route.push('/');
    }
  }, [auth.user, route]);

  useEffect(() => {
    handleGoToPage(1);
  }, [modal]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <div className="flex justify-end relative h-12">
        {/* Button to open "Add Product" modal */}
        <label htmlFor="add-product-modal" className="btn btn-primary text-white rounded-b-none no-animation transition-all gap-2 absolute -bottom-2 hover:bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Añadir un producto
        </label>
        {/* "Add Product" Modal */}
        <Modal id="add-product-modal" modal={modal} setModal={setModal}>
          <AddProductModal setAlert={setAlert} setModal={setModal} />
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
