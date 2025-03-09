import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

const useAxios = <T,>(axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse<T> | null>();
  const [error, setError] = useState<AxiosError<T> | null>();
  const [loading, setLoading] = useState<boolean>(axiosParams.method === "GET" || axiosParams.method === "get");

  const fetchData = async (params: AxiosRequestConfig) => {
    setError(null);
    try {
      const result = await axios.request<T>(params);
      setResponse(result);
    } catch (err) {
      if (axios.isAxiosError(err)) setError(err);
    } finally {
      setLoading(false);
    }
  };

  const sendData = () => {
    fetchData(axiosParams);
  }

  useEffect(() => {
    if(axiosParams.method === "GET" || axiosParams.method === "get"){
      fetchData(axiosParams);
    }
  }, []);

  return { response, error, loading, sendData };
}

export default useAxios;
