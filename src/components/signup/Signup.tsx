'use client';
import { z } from 'zod';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useMutation } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import s from './Signup.module.scss';
import { signupService } from '@/lib/signupService';
import { formDataSchema, FormData } from '@/schemas/form.input.schema';

export default function SignUp() {
  const [code, setCode]= useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formDataSchema),
  });

  const response = useMutation((data: IFormInput) => signupService(data));
  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    response.mutateAsync(data);
  };
  console.log(response?.data?.PrismaCode)
   const xx = response?.data?.PrismaCode;
  useEffect(()=>{
    
      setCode('Invalid email:' + xx)
  
  }, [xx])
  
  return (
    <form className={s.contact__form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign up{code}</h2>
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
      {errors.name?.message && (
        <p className={s.error_message}> name is required</p>
      )}
      <label className={s.input_label} htmlFor="email">
        Your email
      </label>
      <input className={s.form_textinput} id="email" {...register('email')} />
      {errors.email?.message && <p className={s.error_message}>email wrong</p>}
      {/* post author */}
      <label className={s.input_label} htmlFor="comment">
        Your password
      </label>
      <input id="password" {...register('password')} />
      {errors.password?.message && (
        <p className={s.error_message}>password error</p>
      )}
      <button className={s.submit_button} type="submit">
        Send
      </button>
    </form>
  );
}

//npm install @prisma/client --save-dev
