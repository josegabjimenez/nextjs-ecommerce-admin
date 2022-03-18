import React, { useEffect } from 'react';
import { useAuth } from '@hooks/useAuth'; // Auth methods
import { useRouter } from 'next/router'; // Redirect methods
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api/index';

const Dashboard = () => {
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

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    return <button className="btn btn-circle btn-outline btn-lg btn-primary loading" />;
  }

  return <h1>dashboard</h1>;
};

export default Dashboard;
