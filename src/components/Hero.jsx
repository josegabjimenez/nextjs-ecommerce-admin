import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="hero text-center sm:text-left">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/logo512.png" className="hidden sm:block max-w-sm rounded-lg object-scale-down" />
        <div className="p-4 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold">Bienvenido al panel principal del pulguero.</h1>
          <p className="py-6">Desde aquí podrás administrar la plataforma virtual del pulguero perteneciente a la parroquia misericordia divina.</p>
          <div className="flex justify-center sm:justify-start">
            <Link href="/login" passHref>
              <button className="btn btn-primary text-white mr-2 gap-2">
                Ingresar
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
            <a href="https://pulguero.vercel.app/" target="_blank" className="btn btn-outline btn-primary">
              Tienda online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
