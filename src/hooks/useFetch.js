import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getResponse = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const dataJSON = await response.json();
        setData(dataJSON);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    getResponse();
  }, [url]);
  return [data, isLoading, error];
};

export default useFetch;
