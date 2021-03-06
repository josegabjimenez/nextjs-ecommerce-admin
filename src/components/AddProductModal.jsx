import React, { useState, useEffect, useRef } from 'react';
// Components
import { WarningAlert } from '@components/index';
import NumberFormat from 'react-number-format';
import { useRouter } from 'next/router';
import useFetch from '@hooks/useFetch';
import { useForm, Controller } from 'react-hook-form';
import endPoints from '@services/api/index';
import { addProduct, updateProduct } from '@services/api/products';

const AddProductModal = ({ setAlert, setModal, product }) => {
  const categoryRef = useRef(null); // Ref to select default category
  const imageRef = useRef(null); // Ref to input image
  const route = useRouter(); // Router to redirect to products page
  const [imageFileName, setImageFileName] = useState('Elige una imagen');
  const { data: categories } = useFetch(endPoints.categories.getCategories); // Get categories
  // Form methods
  const defaultData = {
    title: product?.title || undefined,
    images: [product?.images[0]] || undefined,
    price: product?.price || undefined,
    categoryId: product?.category?.id || 1,
    description: product?.description || undefined,
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultData,
  });

  const categoryReg = register('categoryId', { required: { value: true, message: 'El campo es requerido' } });
  const imageReg = register('images', { required: { value: false, message: 'El campo es requerido' } });

  // It sends the product to the server and added or updated it
  const submit = async (data) => {
    const imageToUpload = data.images[0].name || data.images[0];
    const fullData = {
      ...data,
      price: parseInt(data.price),
      categoryId: parseInt(data.categoryId),
      images: [imageToUpload],
    };
    // console.log(data);
    // console.log(fullData);

    // It checks if the product is being updated or added
    if (product) {
      try {
        await updateProduct(product.id, fullData);
        // setAlert({
        //   active: true,
        //   type: 'success',
        //   message: 'Producto actualizado correctamente',
        //   autoClose: true,
        // });
        route.push('/products');
      } catch (err) {
        // setAlert({
        //   active: true,
        //   type: 'error',
        //   message: 'Error al actualizar el producto',
        //   autoClose: true,
        // });
      }
    } else {
      try {
        await addProduct(fullData);
        setModal({ close: true });
        setAlert({
          active: true,
          type: 'success',
          message: 'Producto a??adido correctamente',
          autoClose: true,
        });
      } catch (err) {
        setAlert({
          active: true,
          type: 'error',
          message: 'Error al a??adir el producto',
          autoClose: false,
        });
      }
    }
  };

  useEffect(() => {
    // console.log(imageRef);
    categoryRef.current.value = product?.category.id;
    setImageFileName(product?.images[0]);
    // if (product && product.images) {
    //   // categoryRef.current.value = product.category.id;
    // } else {
    //   categoryRef.current.value = -1;
    // }
  }, [categoryRef, product?.category.id, product?.images]);

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
              T??tulo
            </span>
            {/* Input */}
            <input
              {...register('title', { required: { value: true, message: 'El campo es requerido' } })}
              // defaultValue={product?.title}
              id="title"
              type="text"
              placeholder="T??tulo del producto"
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
                  value={value ? value : product?.price ? product?.price : value}
                  onValueChange={(values) => onChange(values.value)}
                  thousandSeparator={true}
                  prefix="$"
                  className={`input input-bordered input-sm ${errors.price ? 'border-red-500' : ''}`}
                  inputMode="numeric"
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
            <select
              // {...register('categoryId', { required: { value: true, message: 'El campo es requerido' } })}
              {...categoryReg}
              ref={(e) => {
                categoryReg.ref(e);
                categoryRef.current = e;
              }}
              className="select select-bordered font-normal select-sm"
            >
              <option disabled value={-1} className="text-gray-400">
                Elige una categoria
              </option>
              {categories?.map((category) => (
                <option key={`category-${category.id}`} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          {errors?.category?.type === 'required' && <WarningAlert className="text-xs mt-1 rounded-md">{errors.category.message}</WarningAlert>}
        </div>

        {/* Product Description section */}
        <label className="input-group input-group-vertical col-span-2">
          <span className="font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descripci??n
          </span>
          <textarea {...register('description')} defaultValue={product?.description} className="textarea textarea-bordered" placeholder="Descripci??n del producto" />
        </label>

        {/* Upload product image section */}
        <div className="col-span-2">
          <label className="input-group input-group-vertical">
            <span className="font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Upload file
            </span>
            <label
              htmlFor="image"
              className={`px-4 py-2 block w-full text-sm rounded-lg rounded-t-none border border-gray-300 cursor-pointer text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 ${
                errors.images ? 'ring-red-500 ring-1' : ''
              }`}
            >
              {imageFileName}
            </label>
            <input
              // {...register('images', { required: { value: true, message: 'El campo es requerido' } })}
              {...imageReg}
              ref={(e) => {
                imageReg.ref(e);
                imageRef.current = e;
              }}
              placeholder="Subir la imagen del producto"
              className="hidden"
              id="image"
              type="file"
              onChange={(e) => {
                imageReg.onChange(e);
                setImageFileName(e.target.files[0]?.name);
              }}
            />
          </label>
          {errors?.images?.type === 'required' && <WarningAlert className="text-xs mt-1 rounded-md">{errors.images.message}</WarningAlert>}
        </div>

        <div className="w-full no-animation flex justify-end col-span-2">
          {/* Modal action buttons */}
          <button className={`btn btn-primary ${product && 'btn-block btn-secondary'}`}>{product ? 'Editar producto' : 'Publicar nuevo producto'}</button>
        </div>
      </form>
    </>
  );
};

export default AddProductModal;
