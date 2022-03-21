import React from 'react';

const EditProductModal = ({ product }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={`edit-product-title-${product.id}`} className="text-md font-bold">
        Título:
      </label>
      <input id={`edit-product-title-${product.id}`} type="text" placeholder="Título del producto" value={product.title} className="input input-bordered input-sm w-full" />

      <label htmlFor={`edit-product-description-${product.id}`} className="text-md font-bold mt-4">
        Descripción:
      </label>
      <textarea id={`edit-product-description-${product.id}`} className="textarea textarea-bordered" placeholder="Descripción del producto" defaultValue={product.description} />

      <label htmlFor={`edit-product-price-${product.id}`} className="text-md font-bold mt-4">
        Precio:
      </label>
      <input id={`edit-product-price-${product.id}`} type="number" placeholder="Precio del producto" value={product.price} className="input input-bordered input-sm w-full" />
      {/* <label className="text-md font-bold">Título:</label>
      <input type="text" placeholder="Type here" className="input input-bordered input-primary input-sm w-full max-w-xs" />

      <label className="text-md font-bold">Título:</label>
      <input type="text" placeholder="Type here" className="input input-bordered input-primary input-sm w-full max-w-xs" />

      <label className="text-md font-bold">Título:</label>
      <input type="text" placeholder="Type here" className="input input-bordered input-primary input-sm w-full max-w-xs" /> */}
    </div>
  );
};

export default EditProductModal;
