import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import { signJWT } from '@/lib/token';
import { User } from '@/models/userModel';
import { getEnvVariable } from '@/lib/helpers';
import connectDB from '@/lib/db';
import { redirect } from 'next/navigation';

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
        await connectDB();
        const email = credentials?.email.toLowerCase();
        //****example of querying your db directly***//
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('User does not exist.');
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
    async jwt({ token, user, session }) {
      //console.log("jwt-callback", {token})

      if (user) {
        return {
          ...token,
          role: user.role,
          id: user.id,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token;
      console.log('session callback', JSON.stringify(session));
      return session;
    },
  },
  secrect: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  //jwt: { secret: process.env.NEXTAUTH__JWT_SECRET} this not!
};
