'use client';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import s from './Login.module.scss';
import { userLoginService } from '@/lib/userLoginService';
import { formDataSchema, FormData } from '@/schemas/form.input.schema';
import { useSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function UserLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formDataSchema),
  });

  const { data: session, status } = useSession();

  //console.log(session);

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true,
    });
  };

  useEffect(() => {
    if (status === 'authenticated') {
      //redirect('/');
    }
  }, [status]);

  return (
    <>
      {status === 'authenticated' ? (
        <p>Signed in as {session.user.name}</p>
      ) : (
        <p>You must authenticate to access</p>
      )}
      <form className={s.contact__form} onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign in</h2>
        <img
          className={s.contact_form_icon}
          src="images/email.png"
          alt="dialog-icon"
        />
        {/* post title */}

        <label className={s.input_label} htmlFor="name">
          Your name
        </label>
        <input className={s.form_textinput} id="name" {...register('name')} />

        <label className={s.input_label} htmlFor="email">
          Your email
        </label>
        <input className={s.form_textinput} id="email" {...register('email')} />

        {/* post author */}
        <label className={s.input_label} htmlFor="comment">
          Your password
        </label>
        <input id="password" {...register('password')} />

        <button className={s.submit_button} type="submit">
          Send
        </button>
      </form>
      <Link href="http://localhost:3000/api/cookies">cookie</Link>
      <Link href="http://localhost:3000/signup">
        Sign up if you don´t have an account
      </Link>
    </>
  );
}
