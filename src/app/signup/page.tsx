import s from './page.module.scss';
import SignUp from 'components/signup/Signup';
import useFetch from '@/hooks/useFetch';

export default function Register() {
  const[ data ]= useFetch("api/");
  return (
    <div>
      <SignUp />
     
    </div>
  );
}
