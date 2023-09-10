import { getToken } from 'next-auth/jwt';

export async function GET(req: Request) {
  const token = await getToken({ req });
  console.log(`this is the token from client: ${token?.email}`);

  return new Response(`Hello ${token?.email}. you are already authenticated!`, {
    status: 200,
    headers: { 'Set-Cookie': `token=${token}` },
  });
}
