import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(endpoint);
      setIsLoading(false);
      setData(res.data);
    } catch (err) {
      setIsLoading(false);
      setIsError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, isError };
};

export default useFetch;
