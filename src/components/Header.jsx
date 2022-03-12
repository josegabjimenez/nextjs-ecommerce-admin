import React from 'react';
import Link from 'next/link';

const Header = () => {
  const links = [
    {
      title: 'Dashboard',
      href: '/dashboard',
    },
    {
      title: 'Products',
      href: '/products',
    },
  ];

  return (
    <div className="navbar bg-base-100 w-full align-center">
      <div className="navbar-start gap-3">
        <div className="sm:hidden dropdown">
          <button className="btn btn-square btn-outline border-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>

          <ul className="dropdown-content menu p-2 shadow-lg bg-primary text-white rounded-box w-52">
            {links.map((link) => (
              <li key={`mobile-${link.href}`} className="font-bold">
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/" passHref>
          <button className="hidden sm:block btn btn-ghost normal-case text-xl no-animation text-primary">Pulguero</button>
        </Link>
        {links.map((link) => (
          <Link key={link.href} href={link.href} passHref>
            <button className="hidden sm:block btn btn-outline border-none">{link.title}</button>
          </Link>
        ))}
      </div>
      <div className="navbar-end">
        <Link href="/login" passHref>
          <button className="btn btn-primary text-white no-animation gap-2">
            Ingresar
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
