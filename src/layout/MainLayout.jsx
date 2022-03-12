import React from 'react';
import { Footer, Header } from '@components/index';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between ">
        <Header />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
