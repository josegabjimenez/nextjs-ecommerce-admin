import React from 'react';
import NumberFormat from 'react-number-format';

const EditProductModal = ({ product }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={`edit-product-title-${product.id}`} className="text-md font-bold">
        Título:
      </label>
      <input id={`edit-product-title-${product.id}`} type="text" placeholder="Título del producto" value={product.title} className="input input-bordered input-sm w-full" />

      <label htmlFor={`edit-product-price-${product.id}`} className="text-md font-bold mt-4">
        Precio:
      </label>
      <NumberFormat
        id={`edit-product-price-${product.id}`}
        value={product.price}
        thousandSeparator={true}
        prefix="$"
        className="input input-bordered input-sm w-full"
        inputmode="numeric"
        placeholder="Precio del producto"
      />

      <label htmlFor={`edit-product-description-${product.id}`} className="text-md font-bold mt-4">
        Descripción:
      </label>
      <textarea id={`edit-product-description-${product.id}`} className="textarea textarea-bordered" placeholder="Descripción del producto" defaultValue={product.description} />
    </div>
  );
};

export default EditProductModal;
