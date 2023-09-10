'use client';
import s from './Navbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  bg?: string;
  color?: string;
}

const Navbar = ({ color, bg }: NavbarProps) => {
  const pathname = usePathname();
  const linkcolor = { color: color };
  const background = { backgroundColor: bg };
  return (
    <ul className={s.navbar_list} style={background}>
      <li className={pathname !== '/' ? s.navbar_item : s.navbar_null}>
        <Link className={s.navbar_link} href="/" style={linkcolor}>
          {pathname !== '/' ? 'home' : null}
        </Link>
      </li>
      <li className={pathname !== '/about' ? s.navbar_item : s.navbar_null}>
        <Link className={s.navbar_link} href="/about" style={linkcolor}>
          {pathname !== '/about' ? 'about' : null}
        </Link>
      </li>
      <li className={pathname !== '/work' ? s.navbar_item : s.navbar_null}>
        <Link className={s.navbar_link} href="/work" style={linkcolor}>
          {pathname !== '/work' ? 'work' : null}
        </Link>
      </li>
      <li className={pathname !== '/contact' ? s.navbar_item : s.navbar_null}>
        <Link className={s.navbar_link} href="/contact" style={linkcolor}>
          {pathname !== '/contact' ? 'contact' : null}
        </Link>
      </li>
    </ul>
  );
};
export default Navbar;

//const blogLink = "https://gfouz.github.io/next-blog-2023";
