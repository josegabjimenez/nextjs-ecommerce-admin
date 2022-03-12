import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-4 drop-shadow-2xl text-base-content">
      <div>
        <p>
          Copyright © {year} - Made with ❤️ by{' '}
          <a className="text-gray-900 font-bold underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jose-gabriel-jim%C3%A9nez-vidales-1b0179215/">
            josegabjimenez
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
