import React, { useState, useEffect } from 'react';
import { useAuth } from '@hooks/useAuth'; // Auth methods
import { useRouter } from 'next/router'; // Redirect methods
import { Chart, Loading } from '@components/index';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api/index';

const ProductsChart = () => {
  const [data, setData] = useState({});
  const { data: allProducts, isLoading } = useFetch(endPoints.products.getProducts(0, 0));

  const populateData = () => {
    const categoryNames = allProducts.map((product) => product.category.name);
    const counts = {};
    for (const category of categoryNames) {
      counts[category] = counts[category] ? ++counts[category] : 1;
    }
    setData(counts);
  };

  useEffect(() => {
    populateData();
  }, [allProducts]);

  const dataForChart = {
    labels: [],
    datasets: [
      {
        data: data,
        backgroundColor: ['#396eb0', '#463AA1'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 1,
      },
    ],
  };

  //? Auth redirections
  const route = useRouter();
  const auth = useAuth();

  // Redirects to main page if there is no user logged
  const checkIfLoggedIn = () => {
    if (!auth.user) {
      route.push('/');
    }
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Chart chartData={dataForChart} />
      <div className="flex justify-center mt-12 text-lg">
        <h4>
          Total de productos: <b>{allProducts.length}</b>
        </h4>
      </div>
    </>
  );
};

export default ProductsChart;
