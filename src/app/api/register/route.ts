import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { customErrorHandler } from '@/lib/prismaErrorHandler';
import { RegisterUserSchema } from '@/schemas/user.schema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedBody = RegisterUserSchema.parse(body);
    const { name, email, password } = parsedBody;
    const hashedPassword = await hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    if (user) {
      //in order to avoid an error-1, you have to return the response!
      return NextResponse.json({ message: 'created', status: 201 });
    } else {
      return NextResponse.json({ message: 'failed on creating user' });
    }
  } catch (error: any) {
    return customErrorHandler(error);
  }
}

export async function GET(req: Request) {
  try {
    await prisma.$connect();
    const users = await prisma.user.findMany();
    return new Response(`Hello. you are already authenticated!`, {
      status: 200,
    });
  } catch (error) {
    return error;
  }
}

// error-1 TypeError: Cannot read properties of undefined (reading 'headers')
