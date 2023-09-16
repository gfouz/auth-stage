import s from './page.module.scss';
import useFetch from '@/hooks/useFetch';
import { Key } from 'react';

export default function UserAdmin() {
  const[ data, loading, error ]= useFetch("/api/admin/user", undefined);
  return (
    <div className={s.userAdmin_container}>
    
      <table className={s.userAdmin_table}>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Email Address</th>
        </tr>
      {
        data.length > 0 && data.map( (user: { id: Key | null | undefined; }) => (
           <tr key={user?.id}>
             <td>user?.name</td>
             <td>user?.role</td>
             <td>user?.email</td>
           </tr>
          ))
      }
        

      </table>
    </div>
  );
}
