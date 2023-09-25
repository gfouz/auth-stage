import { button } from '@chakra-ui/react';
import { useMutation } from 'react-query';
import { deleteUserService } from '@/lib/deleteUserService';
import s from './UserDelete.module.scss';


export default function UserDelete({ setToggle, user }) {

  const clickHandler = (user) => {
      deleteUserService(user)
  };
  return (
    <div className={s.userDelete_container}>
      <h2>Warning!</h2>
      <h2>Below button will delete user!</h2>
      <button
        className={s.delete_button}
        onClick={() => {
          clickHandler(user)
        }}
      >
        Delete User
      </button>
    </div>
  );
}
