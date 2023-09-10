'use server';
import { revalidateTag } from 'next/cache';

interface IData {
  title: string;
  author: string;
}

export const addPosts = async (data: IData) => {
  try {
    await fetch('http://localhost:4000/posts', {
      cache: 'no-cache',
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    revalidateTag('posts');
  } catch (error) {
    console.log(error);
  }
};
