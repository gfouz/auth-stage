import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { customErrorHandler } from '@/lib/prismaErrorHandler';
import { RegisterUserSchema } from '@/schemas/user.schema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    await prisma.$connect();
    const users = await prisma.user.findMany();
    if(users){ 
      return NextResponse.json({ users, status:200 })
  }
  } catch (error) {
    return customErrorHandler(error);
  }
}

/* error TypeError: Cannot read properties of undefined (reading 'headers')
   to avoid the above error, it is required to return every response.*/