import s from './page.module.scss';
import { request } from '@/lib/request';
import UserInterface from 'components/userInterface/UserInterface';

const url = 'http://localhost:3000/api/admin/user';

export default async function AdminUser() {
  const users = await request(url);
  return (
    <>
      <UserInterface users={users} />
    </>
  );
}
