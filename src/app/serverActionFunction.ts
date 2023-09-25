'use server';
import { revalidateTag } from 'next/cache';
import { UpdateUserInput } from '@/schemas/user.schema';

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

export async function updateUserService(data: UpdateUserInput) {
  try {
    const response = await fetch('http://localhost:3000/api/admin/user', {
      cache: 'no-cache',
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    revalidateTag('user');
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('this is the horrible error' + error);
    return { Error_Message: `this error has been caused by: ${error} ` };
  }
}
