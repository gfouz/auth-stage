import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { compare } from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/* A suggestion:
   if your backend is self-hosted, why not to query your db directly 
   as [...nextauth].js runs on the backend? */

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'gfouz' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const email = credentials?.email.toLowerCase();

        await prisma.$connect();
        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        if (!user) {
          //throw new Error('User does not exist.');
          return new Response(`User does not exist!`, {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
        }
        const passwordIsValid = await compare(
          credentials?.password!,
          user.password,
        );
        if (!passwordIsValid) {
          throw new Error('Invalid credentials');
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      //console.log("jwt-callback", {token})

      if (user) {
        return {
          ...token,
          name: user.name,
          email: user.email,
          id: user.id,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      //session.accessToken = token;
      console.log('session callback', JSON.stringify(session));
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  //jwt: { secret: process.env.NEXTAUTH__JWT_SECRET} this not!
};
