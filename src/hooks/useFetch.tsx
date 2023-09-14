import { useQuery } from 'react-query';


export default function useFetch(url: RequestInfo | URL, params: string) {
 const { data, isLoading, isError } = useQuery('query-key', () =>
   request(url, params) )
   return [data, isLoading, isError ];   
}

async function request(url: RequestInfo | URL, params: string) {
  
  if (params) {
    url = `/${url}/${params}`; 
  }
  const response = await fetch(url, { cache: 'no-cache' });
  const result = await response.json();
  return result;
}

