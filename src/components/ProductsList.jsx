import React from 'react';
import Image from 'next/image';
import { EditProductModal } from '@components/index';

const ProductsList = ({ products }) => {
  return (
    <div className="">
      <table className="table hidden overflow-hidden sm:block">
        {/* head */}
        <thead className="">
          <tr>
            <th>Información</th>
            <th>Descripción</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {/* Rows */}
          {products.map((product) => {
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
                    <label htmlFor={`edit-product-modal-${product.id}`} className="btn modal-button btn-success btn-xs ">
                      Editar
                    </label>

                    {/* Modal to edit a product */}
                    <input type="checkbox" id={`edit-product-modal-${product.id}`} className="modal-toggle" />
                    <label htmlFor={`edit-product-modal-${product.id}`} className="modal cursor-pointer">
                      <label className="modal-box" htmlFor>
                        {/* Edit product options */}
                        <EditProductModal product={product} />
                        <div className="w-full no-animation flex justify-end gap-2">
                          {/* Modal action buttons */}
                          <button className="btn btn-primary">Guardar cambios</button>
                          <label for={`edit-product-modal-${product.id}`} className="btn btn-primary btn-outline">
                            Cancelar
                          </label>
                        </div>
                      </label>
                    </label>
                  </td>
                  <td>
                    {/* Delete button */}
                    <button className="btn btn-warning btn-xs">Eliminar</button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
