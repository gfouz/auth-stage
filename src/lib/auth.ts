import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { compare } from 'bcryptjs';
import { User } from '@/models/userModel';
import connectDB from '@/lib/db';

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
        return {
          id: user._id.toString(),
          ...user,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};
