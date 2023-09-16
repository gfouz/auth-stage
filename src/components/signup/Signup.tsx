'use client';
import { TypeOf, z } from 'zod';
import { useState, useEffect, ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { useMutation } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import s from './Signup.module.scss';
import { signupService } from '@/lib/signupService';
import { formDataSchema, FormData } from '@/schemas/form.input.schema';
import {
  FormControl,
  FormLabel, Input,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { type } from 'os';

export default function SignUp() {
  const [code, setCode]= useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formDataSchema),
  });
  type InputError = typeof errors | ReactNode;
  const nameError: InputError = errors.name?.message;
  const emailError: InputError = errors.email?.message;
  const passwordError: InputError = errors.password?.message;

  const response = useMutation((data: FormData) => signupService(data));
  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    response.mutateAsync(data);
  };
  console.log(response?.data)
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
      
      <FormControl>
        <FormLabel htmlFor='name'>Your name</FormLabel>
        <Input 
          id='name' 
          type='text' 
          variant='flushed'
          {...register('name')}
        />
      </FormControl>
      { nameError && <p className={s.error_message}>{nameError}</p>}
      <FormControl>
        <FormLabel htmlFor='email'>Email address</FormLabel>
        <Input 
          id='email' 
          type='email' 
          variant='flushed'
          {...register('email')}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      {emailError && <p className={s.error_message}>{ emailError }</p>}

      <FormControl>
        <FormLabel htmlFor='email'>Your password</FormLabel>
        <Input 
          id='password' 
          type='password' 
          variant='flushed'
          {...register('password')}
        />
      </FormControl>
      {passwordError && <p className={s.error_message}>{ passwordError }</p>}

      <button className={s.submit_button} type="submit">
        Send
      </button>
    </form>
  );
}

//npm install @prisma/client --save-dev
