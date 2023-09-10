import { z } from 'zod';

export const formDataSchema = z.object({
  name: z.string().min(1, { message: 'a name is required' }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().min(6, { message: 'password is required' }),
});

export type FormData = z.infer<typeof dataSchema>;
