import React from 'react';
import NumberFormat from 'react-number-format';
import { useForm } from 'react-hook-form';
import { WarningAlert } from '@components/index';

const AddProductModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form className="grid grid-cols-2 gap-4 py-4" onSubmit={handleSubmit(submit)}>
        {/* Product title section */}
        <div>
          <label className="input-group input-group-vertical">
            <span className="font-bold outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Título
            </span>
            {/* Input */}
            <input id="title" {...register('title', { required: true })} type="text" placeholder="Título del producto" className="input input-bordered input-sm" />
          </label>
          {errors?.title?.type === 'required' && <WarningAlert className="text-xs mt-1 rounded-md">No puedes dejar esta campo vacío</WarningAlert>}
        </div>

        {/* Product price section */}
        <div>
          <label className="input-group input-group-vertical">
            <span className="font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Precio
            </span>
            {/* Input */}
            <NumberFormat
              id="price"
              getInputRef={(input) => {
                console.log(input);
              }}
              // {...register('price', { required: true })}
              thousandSeparator={true}
              prefix="$"
              className="input input-bordered input-sm"
              inputmode="numeric"
              placeholder="Precio del producto"
            />
          </label>
          {errors?.price?.type === 'required' && <WarningAlert className="text-xs mt-1 rounded-md">No puedes dejar esta campo vacío</WarningAlert>}
        </div>

        {/* Product Category section*/}
        <label className="input-group input-group-vertical col-span-2">
          <span className="font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Categoria
          </span>
          {/* Input */}
          <select className="select select-bordered font-normal select-sm">
            <option disabled selected className="">
              Elige una categoria
            </option>
            <option>T-shirts</option>
            <option>Mugs</option>
          </select>
        </label>

        {/* Product category section */}
        <label className="input-group input-group-vertical col-span-2">
          <span className="font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descripción
          </span>
          <textarea className="textarea textarea-bordered" placeholder="Descripción del producto" />
        </label>

        {/* Upload product image section */}
        <label className="input-group input-group-vertical col-span-2 ">
          <span className="font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Upload file
          </span>
          <label
            htmlFor="image"
            className="px-4 py-2 block w-full text-sm rounded-lg rounded-t-none border border-gray-300 cursor-pointer text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            Elige una imagen
          </label>
          <input placeholder="Subir la imagen del producto" className="hidden" id="image" name="image" type="file" />
        </label>

        <div className="w-full no-animation flex justify-end col-span-2">
          {/* Modal action buttons */}
          <button className="btn btn-primary">Publicar nuevo producto</button>
        </div>
      </form>
    </>
  );
};

export default AddProductModal;
