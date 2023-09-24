'use client';
import { useState } from 'react';
import s from './UserInterface.module.scss';
import UserEditor from './UserEditor';
import UserTable from './UserTable';
import { User, UserList } from '../../schemas/user.schema';

const InitialState = {
  id: '',
  name: '',
  role: '',
  email: '',
};

export default function UserInterface({ users }: UserList) {
  const [option, setOption] = useState(true);
  const [user, setUser] = useState(InitialState);

  function clickHandler(user: User) {
    setUser({
      ...InitialState,
      name: user.name,
      role: user.role,
      email: user.email,
    });
    setOption(false);
  }
  return (
    <div className={s.userInterface_container}>
      {option ? (
        <UserTable users={users} clickHandler={clickHandler} />
      ) : (
        <UserEditor user={user} setOption={setOption} />
      )}
    </div>
  );
}
