import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Pulguero</a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Ingresar</a>
      </div>
    </div>
  );
};

export default Header;
