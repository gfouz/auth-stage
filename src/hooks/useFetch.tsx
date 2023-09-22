import { useQuery } from 'react-query';

export default function useFetch(url: RequestInfo) {
  const { data, isLoading, isError } = useQuery('query-key', () =>
    request(url),
  );
  return [data, isLoading, isError];
}

async function request(url: RequestInfo | URL) {
  const data = await fetch(url);
  //console.log( data)
  const response = await data.json();
  return response;
}
