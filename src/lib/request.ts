'use server';
import { revalidateTag } from 'next/cache';

export async function request(url: RequestInfo | URL, params: string) {
  if (params) {
    url = `/${url}/${params}`;
  }
  const data = await fetch(url, {
    cache: 'no-cache',
    next: { tags: ['user'] }
  });
  
  const response = data.json();
  return response;
}
