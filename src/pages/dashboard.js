import React from 'react';
import { ProductsChart } from '@containers/index';

const Dashboard = () => {
  return (
    <>
      <div className="xs:w-[10rem] sm:w-[30rem] md:w-[40rem] lg:w-[60rem]">
        <ProductsChart />
      </div>
    </>
  );
};

export default Dashboard;
