import s from './page.module.scss';
//import { useQuery } from 'react-query';
import { Key } from 'react';
import UserInterface from 'components/userInterface/UserInterface';

const url = 'http://localhost:3000/api/admin/user';

async function request(url: RequestInfo | URL, params: string) {
  if (params) {
    url = `/${url}/${params}`;
  }
  const data = await fetch(url, { cache: 'no-cache' });

  const response = data.json();
  //console.log( response )
  return response;
}

export default async function AdminUser() {
  const users = await request(url);
  console.log(users);
  return (
    <>
      <UserInterface users={users} />
    </>
  );
}

/*
      const res = await fetch(url);
      const response = await res.json();
      const userlist = response?.users;

      const { data, isLoading, isError } = useQuery('query-key', () =>
      request(url),
      );

*/
