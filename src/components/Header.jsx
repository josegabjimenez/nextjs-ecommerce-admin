import React from 'react';
import Link from 'next/link';
import { useAuth } from '@hooks/useAuth';
import { useRouter } from 'next/router';

const Header = () => {
  const auth = useAuth();
  const route = useRouter();
  const links = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      style: `hidden sm:block btn btn-neutral ${route.pathname != '/dashboard' && 'btn-outline'} border-none`,
    },
    {
      title: 'Productos',
      href: '/products',
      style: `hidden sm:block btn btn-neutral ${route.pathname != '/products' && 'btn-outline'} border-none`,
    },
  ];

  // Logout user function
  const handleLogout = () => {
    auth.logOut();
    route.push('/'); // Redirects to landing page
  };

  return (
    <div className="navbar bg-base-100 w-full align-center px-5">
      <div className="navbar-start gap-3">
        <div className="sm:hidden dropdown">
          <button className="btn btn-square btn-outline border-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>

          {/* Mobile menu */}
          <ul className="dropdown-content menu p-2 shadow-lg bg-primary text-white rounded-box w-52">
            {links.map((link) => (
              <li key={`mobile-${link.href}`} className="font-bold">
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Links */}
        <Link href="/" passHref>
          <button className="hidden sm:block btn btn-ghost normal-case text-xl no-animation text-primary">Pulguero</button>
        </Link>
        {auth.user &&
          links.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <button className={link.style}>{link.title}</button>
            </Link>
          ))}
      </div>
      <div className="navbar-end">
        {/* Info side */}
        {!auth.user ? (
          <Link href="/login" passHref>
            <button className="btn btn-primary text-white no-animation gap-2">
              Ingresar
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src="https://api.lorem.space/image/face?hash=33791" /> */}
                <img src={`https://ui-avatars.com/api/?background=random&name=${auth.user.name}`} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary text-white rounded-box w-52">
              <li>
                <button className="justify-between">
                  Perfil
                  <span className="badge badge-secondary">Nuevo</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLogout()}>Cerrar sesión</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
