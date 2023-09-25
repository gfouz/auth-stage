'use server';
import { revalidateTag } from 'next/cache';

export async function request(url: RequestInfo | URL, params: string) {
  try {
    if (params) {
      url = `/${url}/${params}`;
    }
    const data = await fetch(url, {
      cache: 'no-cache',
      next: { tags: ['user'] },
    });

    const response = data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}
