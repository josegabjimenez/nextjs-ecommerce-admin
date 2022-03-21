import React, { useEffect } from 'react';
import { useAuth } from '@hooks/useAuth'; // Auth methods
import { useRouter } from 'next/router'; // Redirect methods
import { ProductsList } from '@components/index';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api/index';

const Products = () => {
  const route = useRouter();
  const auth = useAuth();
  const { data, isLoading } = useFetch(endPoints.products.getProducts);

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
    return <button className="btn btn-circle btn-outline btn-lg btn-primary loading" />;
  }

  return (
    <div className="overflow-x-auto w-full">
      <ProductsList products={data} />
    </div>
  );
};

export default Products;
