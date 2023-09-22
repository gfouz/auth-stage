import { z } from 'zod';

export const RegisterUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(1, 'Email is required')
    .email('invalid format!'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required'),
});

export const LoginUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(1, 'Email is required')
    .email('Email is invalid'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
});
export const UpdateUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  role: z.string().min(1, 'Name is required'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(1, 'Email is required')
    .email('invalid format!'),
});

export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;
export type LoginUserInput = z.infer<typeof LoginUserSchema>;
export type UserAttrs = z.infer<typeof RegisterUserSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;

export interface User extends UpdateUserInput {
  id: string;
}
export interface UserList {
  users: User[];
}
