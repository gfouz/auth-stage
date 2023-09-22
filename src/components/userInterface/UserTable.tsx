import s from './UserTable.module.scss';
import { User, UserList } from '../../schemas/user.schema';

interface UserTableProps extends UserList {
  clickHandler: (user: User) => void;
}

export default function UserTable({ users, clickHandler }: UserTableProps) {
  return (
    <table className={s.table}>
      <tbody>
        <tr className={s.table_heading}>
          <th>Name</th>
          <th>Role</th>
          <th>Email Address</th>
        </tr>
        {users &&
          users.map((user: User) => (
            <tr
              key={user.id}
              onClick={() => {
                clickHandler(user);
              }}
            >
              <td>{user?.name}</td>
              <td>{user?.role}</td>
              <td>{user?.email}</td>
              <td>
                {user ? (
                  <img
                    className={s.table_edit_image}
                    src="/images/edit.png"
                    alt="edit"
                  />
                ) : null}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
