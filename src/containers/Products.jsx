import React, { useState, useEffect } from 'react';
import { AddProductModal, Loading, Modal, ProductsList, Alert } from '@components/index';
import axios from 'axios';
import endPoints from '@services/api/index';

// hooks 🪝
import { useRouter } from 'next/router'; // Redirect methods
import { useAuth } from '@hooks/useAuth'; // Auth methods
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
  const [products, setProducts] = useState([]); // Products state
  const [totalProducts, setTotalProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  // const { data: totalData } = useFetch(endPoints.products.getProducts(0, 0)); // Fetch total products
  // const { data, isLoading } = useFetch(endPoints.products.getProducts(PRODUCTS_LIMIT, productOffset)); // Fetch products with pagination

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

  // Fetch products
  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const { data } = await axios.get(endPoints.products.getProducts(PRODUCTS_LIMIT, productOffset));
      const { data: totalData } = await axios.get(endPoints.products.getProducts(0, 0));
      setProducts(data);
      setTotalProducts(totalData);
      setIsLoading(false);
    };

    getProducts();
  }, [alert, productOffset]);

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
        products={products}
        onUpdateProducts={handleUpdateProducts}
        currentPage={productOffset / PRODUCTS_LIMIT + 1}
        totalPages={Math.ceil(totalProducts.length / PRODUCTS_LIMIT)}
        goToPage={handleGoToPage}
        setAlert={setAlert}
      />
    </>
  );
};

export default Products;
