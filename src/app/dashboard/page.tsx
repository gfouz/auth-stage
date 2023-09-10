'use client';
import s from './page.module.scss';
import Posts from 'components/postlist/PostList';
import { revalidateTag } from 'next/cache';
import Contact from 'components/contact/Contact';
import { userRegisterService } from '../lib/userRegisterService';
import Iterator from 'components/iterator/Iterator';
import Register from 'components/register/Register';

interface IPost {
  title: string;
  author: string;
}

export default function Dashboard() {
  return (
    <div className={s.contact}>
      <h1>this dashboard page</h1>
    </div>
  );
}
