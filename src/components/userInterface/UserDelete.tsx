import { button } from '@chakra-ui/react';
import s from './UserDelete.module.scss';

export default function UserDelete({ setToggle }) {
  return (
    <div className={s.userDelete_container}>
      <h2>Warning!</h2>
      <h2>Below button will delete user!</h2>
      <button
        className={s.delete_button}
        onClick={() => {
          setToggle(false);
        }}
      >
        Delete User
      </button>
    </div>
  );
}
