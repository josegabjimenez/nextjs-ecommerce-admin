import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { WarningAlert } from '@components/index';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api/index';
import NumberFormat from 'react-number-format';

const AddProductModal = () => {
  const { data: categories } = useFetch(endPoints.categories.getCategories);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
    const fullData = {
      ...data,
      price: parseInt(data.price),
    };
    console.log(fullData);
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
            <input
              id="title"
              {...register('title', { required: { value: true, message: 'El campo es requerido' } })}
              type="text"
              placeholder="Título del producto"
              className={`input input-bordered input-sm ${errors.title ? 'border-red-500' : ''}`}
            />
          </label>
          {errors?.title?.type === 'required' && <WarningAlert className="text-xs mt-1 rounded-md">{errors.title.message}</WarningAlert>}
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

            <Controller
              name="price"
              control={control}
              rules={{ required: { value: true, message: 'El campo es requerido' } }}
              render={({ field: { value, onChange, name } }) => (
                <NumberFormat
                  id={name}
                  value={value}
                  onValueChange={(values) => onChange(values.value)}
                  thousandSeparator={true}
                  prefix="$"
                  className={`input input-bordered input-sm ${errors.price ? 'border-red-500' : ''}`}
                  inputmode="numeric"
                  placeholder="Precio del producto"
                />
              )}
            />
          </label>
          {errors?.price?.type === 'required' && <WarningAlert className="text-xs mt-1 rounded-md">{errors.price.message}</WarningAlert>}
        </div>

        {/* Product Category section*/}
        <div className="col-span-2">
          <label className="input-group input-group-vertical">
            <span className="font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Categoria
            </span>
            {/* Input */}
            <select className="select select-bordered font-normal select-sm" {...register('category', { required: { value: true, message: 'El campo es requerido' } })}>
              <option disabled selected className="">
                Elige una categoria
              </option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          {errors?.category?.type === 'required' && <WarningAlert className="text-xs mt-1 rounded-md">{errors.category.message}</WarningAlert>}
        </div>

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
