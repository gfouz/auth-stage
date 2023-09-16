import { useQuery } from 'react-query';


export default function useFetch(url: RequestInfo | URL, params: string | undefined) {
 const { data, isLoading, isError } = useQuery('query-key', () =>
   request(url, params) )
   return [data, isLoading, isError ];   
}

async function request(url: RequestInfo | URL, params: string | undefined) {
  
  if (params) {
    url = `/${url}/${params}`; 
  }
  const data = await fetch(url, { cache: 'no-cache' });
  const response = await data.json();
  return response;
}

