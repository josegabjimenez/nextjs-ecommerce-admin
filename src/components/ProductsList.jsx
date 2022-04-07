/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { deleteProduct } from '@services/api/products'; // Products api methods

const ProductsList = ({ products, currentPage, totalPages, goToPage, setAlert }) => {
  const route = useRouter();

  // Calculates the number of buttons per page
  const buttons = [];
  for (let i = 0; i < totalPages; i++) {
    buttons.push(i + 1);
  }

  // Redirects to edit product page
  const handleEditProduct = (id) => {
    route.push(`/products/edit/${id}`);
  };

  // Delete a product
  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setAlert({
        active: true,
        type: 'success',
        message: 'Producto eliminado correctamente',
        autoClose: true,
      });
    } catch (err) {
      setAlert({
        active: true,
        type: 'error',
        message: 'Error al eliminar el producto, vuelve a intentarlo',
        autoClose: true,
      });
    }
  };

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table hidden overflow-hidden sm:block bg-neutral rounded-2xl rounded-tr-none">
          {/* head */}
          <thead className="bg-green-500">
            <tr>
              <th className="bg-neutral text-white">Información</th>
              <th className="bg-neutral text-white">Descripción</th>
              <th className="bg-neutral text-white" />
              <th className="bg-neutral text-white" />
            </tr>
          </thead>
          <tbody>
            {/* Rows */}
            {products?.map((product) => {
              if (product.images[0]) {
                return (
                  <tr key={product.id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          {/* Preview of product image */}
                          <label htmlFor={`product-image-modal-${product.id}`} className="mask mask-squircle w-12 h-12 modal-button cursor-pointer">
                            <Image src={product.images[0]} layout="fill" alt="Avatar Tailwind CSS Component" />
                          </label>
                          {/* Product image modal */}
                          <input type="checkbox" id={`product-image-modal-${product.id}`} className="modal-toggle" />
                          <label htmlFor={`product-image-modal-${product.id}`} className="modal cursor-pointer">
                            <label className="modal-box w-80 h-80" htmlFor>
                              <Image src={product.images[0]} width="100%" height="100%" layout="fill" alt="Avatar Tailwind CSS Component" />
                            </label>
                          </label>
                        </div>
                        <div>
                          {/* Title and price */}
                          <div className="font-bold">{product.title}</div>
                          <div className="text-sm opacity-50 font-bold">${product.price}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {/* Description */}
                      <p className="whitespace-normal w-80">{product.description}</p>
                    </td>
                    <td>
                      {/* Edit button */}
                      <label htmlFor={`edit-product-modal-${product.id}`} className="btn modal-button btn-secondary btn-xs" onClick={() => handleEditProduct(product.id)}>
                        Editar
                      </label>

                      {/* Modal to edit a product */}
                      {/* <Modal id={`edit-product-modal-${product.id}`}>
                        Edit product options
                        <EditProductModal product={product} />
                        <div className="w-full no-animation flex justify-end gap-2">
                          Modal action buttons
                          <button className="btn btn-primary">Guardar cambios</button>
                          <label htmlFor={`edit-product-modal-${product.id}`} className="btn btn-primary btn-outline">
                            Cancelar
                          </label>
                        </div>
                      </Modal> */}
                    </td>
                    <td>
                      {/* Delete button */}
                      <button className="btn btn-error btn-xs" onClick={() => handleDeleteProduct(product.id)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>

        {/* Pagination */}
        {/* Buttons per page */}
        <div className="btn-group flex justify-center mt-4">
          {currentPage >= 5 && (
            <>
              <button className={`btn ${currentPage === 1 && 'btn-active'}`} onClick={() => goToPage(1)}>
                1
              </button>
              <button className="btn">...</button>
            </>
          )}
          {buttons.map((buttonPage) => {
            if (buttonPage >= currentPage - 3 && buttonPage <= currentPage + 3) {
              return (
                <>
                  <button key={`button-product-page-${buttonPage}`} className={`btn ${currentPage === buttonPage && 'btn-active'}`} onClick={() => goToPage(buttonPage)}>
                    {buttonPage}
                  </button>
                </>
              );
            }
          })}
          {currentPage <= totalPages - 4 && (
            <>
              <button className="btn">...</button>
              <button className={`btn ${currentPage === totalPages && 'btn-active'}`} onClick={() => goToPage(totalPages)}>
                {totalPages}
              </button>
            </>
          )}
        </div>

        {/* Next and back buttons */}
        {/* <div className="btn-group flex justify-center mt-4">
        <button className="btn" onClick={() => onUpdateProducts('back')}>
          «
        </button>
        <button className="btn" onClick={() => goToPage(1)}>
          Página {currentPage}
        </button>
        <button className="btn" onClick={() => onUpdateProducts('next')}>
          »
        </button>
      </div> */}
      </div>
    </>
  );
};

export default ProductsList;
