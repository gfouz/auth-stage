'use client';
import s from './page.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function Homepage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  /*useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin');
    }
  }, [status]);*/

  return (
    <div className={s.contact}>
      <h1>Homepage</h1>
      {session ? (
        <>
          <p>{session.user.name}</p>
          <p>{session.user.email}</p>
          <button className={s.form_button} onClick={() => signOut()}>
            Sign out
          </button>
        </>
      ) : (
        <>
          <Link href="http://localhost:3000/signup">Register now!</Link>
        </>
      )}
    </div>
  );
}

//See other ways of importing Prisma Client: http://pris.ly/d/importing-client
