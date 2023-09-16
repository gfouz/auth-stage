import { FormData } from '@/schemas/form.input.schema.ts';
import { useState } from 'react';

export async function signupService(data: FormData) {
  try {
    const response = await fetch('http://localhost:3000/api/register', {
      cache: 'no-cache',
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("this is the horrible error" + error)
    return { Error_Message: `this error has been caused by: ${error} ` };
  }
}
