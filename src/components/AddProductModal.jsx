import React from 'react';

const AddProductModal = () => {
  return (
    <>
      <form className="grid grid-cols-2 gap-4 py-4">
        <label className="input-group input-group-vertical">
          <span className="font-bold outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Título
          </span>
          <input id="title" name="title" type="text" placeholder="Título del producto" className="input input-bordered" />
        </label>

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
          <input id="price" name="price" type="text" placeholder="Precio del producto" className="input input-bordered" />
        </label>

        <label className="input-group input-group-vertical col-span-2">
          <span className="font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Categoria
          </span>
          <select className="select select-bordered font-normal">
            <option disabled selected className="">
              Elige una categoria
            </option>
            <option>T-shirts</option>
            <option>Mugs</option>
          </select>
        </label>

        <label className="input-group input-group-vertical col-span-2">
          <span className="font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descripción
          </span>
          <textarea className="textarea textarea-bordered" placeholder="Descripción del producto" />
        </label>

        <div className="col-span-2">
          <label className="block mb-2 text-sm font-medium" htmlFor="user_avatar">
            Upload file
          </label>
          <input
            className="block w-full text-sm rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
          />
        </div>
      </form>
    </>
  );
};

export default AddProductModal;
