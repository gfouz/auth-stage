'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const FieldValuesSchema = z.object({
  title: z.string().min(1, { message: 'a title is required' }).max(150),
  author: z.string().max(150).nullish(),
});

type FieldValues = z.infer<typeof FieldValuesSchema>;

export default function Contact({ serverFn }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(FieldValuesSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    serverFn(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* post title */}
      <label htmlFor="title">Post title</label>
      <input id="title" {...register('title')} />
      {errors.title?.message && <p>{errors.title?.message}</p>}
      {/* post author */}
      <label htmlFor="author">Post author</label>
      <input id="author" {...register('author')} />
      <button type="submit">Submit</button>
    </form>
  );
}
