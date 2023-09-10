import s from './navbar.module.scss';
import { IRouteArray } from './constants';
import { useRouter } from 'next/router';

function Navbar(props: IRouteArray) {
  const router = useRouter();
  const navlinks = props?.options?.filter(
    (item) => item.path !== router.pathname,
  );

  return (
    <>
      <div className={s.container}>
        <div className={s.nav}>
          {navlinks?.map((item, index) => (
            <ul className={s.nav__list} key={index}>
              <li className={s.nav__item}>
                <div className={s.nav__icon}>{item.icon}</div>
                <div className={s.nav__link}>{item.link}</div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
export default Navbar;
