'use client';
import s from './page.module.scss';
import Posts from 'components/postlist/PostList';
import { revalidateTag } from 'next/cache';
import Contact from 'components/contact/Contact';
import { userRegisterService } from '@/lib/userRegisterService';
import Iterator from 'components/iterator/Iterator';
import Register from 'components/register/Register';
import Login from 'components/login/Login';
import { cookies } from 'next/headers';

export default function Signin() {
  return (
    <div className={s.contact}>
      <Login />
    </div>
  );
}
