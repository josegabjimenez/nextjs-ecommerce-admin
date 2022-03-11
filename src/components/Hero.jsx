import React from 'react';

const Hero = () => {
  return (
    <div className="hero min-h-[calc(100vh-10rem)] lg:p-32">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/logo512.png" className="max-w-sm rounded-lg " />
        <div className=" p-12">
          <h1 className="text-5xl font-bold">Bienvenido al panel principal del pulguero.</h1>
          <p className="py-6">Desde aquí podrás administrar la plataforma virtual del pulguero perteneciente a la parroquia misericordia divina.</p>
          <button className="btn btn-primary">Ingresar</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
