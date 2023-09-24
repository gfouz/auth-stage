'use client';
import { useMutation } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdateUserSchema, UpdateUserInput, User } from '@/schemas/user.schema';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { type } from 'os';
import { updateUserService } from '@/lib/updateUserService';
//import { updateUserService } from '../../app/serverActionFunction';
import { ReactNode, useState, useEffect } from 'react';
import s from './UserEditor.module.scss';
import UserDelete from './UserDelete';

interface UserEditorProps {
  user: User;
}

export default function UserEditor({ user, setOption }: UserEditorProps) {
  const [toggle, setToggle] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUserInput>({
    resolver: zodResolver(UpdateUserSchema),
  });
  type InputError = typeof errors | ReactNode;
  const nameError: InputError = errors.name?.message;
  const roleError: InputError = errors.role?.message;
  const emailError: InputError = errors.email?.message;
  const response = useMutation((data: UpdateUserInput) =>
    updateUserService(data),
  );
  const onSubmit: SubmitHandler<UpdateUserInput> = (data: UpdateUserInput) => {
    response.mutateAsync(data);
  };
  const message = response.data?.message;

  useEffect(() => {
    if (message === 'updated') {
      setOption(true);
    }
  }, [message]);
  return toggle ? (
    <UserDelete setToggle={setToggle} />
  ) : (
    <div className={s.editor_container}>
      <button
        className={s.delete_button}
        onClick={() => {
          setToggle(true);
        }}
      >
        <img src="/images/trash.png" alt="trash-icon" />
      </button>
      <form className={s.form_editor} onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="name">User name</FormLabel>
          <Input
            id="name"
            type="text"
            variant="flushed"
            {...register('name')}
            defaultValue={user.name}
          />
        </FormControl>
        {nameError && <p className={s.error_message}>{nameError}</p>}
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            variant="flushed"
            {...register('email')}
            defaultValue={user.email}
          />
        </FormControl>
        {emailError && <p className={s.error_message}>{emailError}</p>}

        <FormControl>
          <FormLabel htmlFor="role">User role</FormLabel>
          <Input
            id="role"
            type="text"
            variant="flushed"
            {...register('role')}
            defaultValue={user.role}
          />
        </FormControl>
        {roleError && <p className={s.error_message}>{roleError}</p>}

        <Button colorScheme="teal" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
}
