import { getEnvVariable, getErrorResponse } from '@/lib/helpers';
import { User } from '@/models/userModel';
import { signJWT } from '@/lib/token';
import { LoginUserInput, LoginUserSchema } from '@/schemas/user.schema';
import { compare } from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import connectDB from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LoginUserInput;
    const data = LoginUserSchema.parse(body);
    const { email, password } = data;
    await connectDB();
    const user = await User.findOne({ email: email });

    if (!user || !(await compare(data.password, user.password))) {
      return getErrorResponse(401, 'Invalid email or password');
    }

    const JWT_EXPIRES_IN = getEnvVariable('JWT_EXPIRES_IN');

    const token = await signJWT(
      { sub: user.id },
      { exp: `${JWT_EXPIRES_IN}m` },
    );

    const tokenMaxAge = parseInt(JWT_EXPIRES_IN) * 60;
    const cookieOptions = {
      name: 'token',
      value: token,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV !== 'development',
      maxAge: tokenMaxAge,
    };

    return NextResponse.json({
      user: { id: user.id, email: user.email, role: user.role },
      token: token,
    });
  } catch (error: any) {
    if (error instanceof ZodError) {
      return getErrorResponse(400, 'failed validations', error);
    }

    return getErrorResponse(500, error.message);
  }
}
