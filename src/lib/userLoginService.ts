import { FormData } from 'types/types';

export async function userLoginService(data: FormData) {
  try {
    const response = await fetch('http://localhost:3000/api/login', {
      cache: 'no-cache',
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });

    console.log('this is response', { data: await response.json() });
  } catch (error) {
    return error;
  }
}
