import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from '@env'

// const rapidApiKey = '2529f1d242mshafd9e4ec4e4fa47p167a02jsn37ffe5ba193c'; 72a4a4df4cmshe69daecd4cd37e0p1267dajsn682e12e0163e

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '668c26572fmsh451f684eeba3433p14e5bdjsn8e2b669a6a49',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }, 
    params: {...query},
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;