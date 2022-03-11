import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <button className="btn btn-ghost normal-case text-xl no-animation">Pulguero</button>
      </div>
      <div className="navbar-end">
        <a href="https://pulguero.vercel.app/" className="btn btn-primary text-white no-animation" target="_blank">
          Ingresar
        </a>
      </div>
    </div>
  );
};

export default Header;
