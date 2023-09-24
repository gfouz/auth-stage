import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { customErrorHandler } from '@/lib/prismaErrorHandler';
import { RegisterUserSchema } from '@/schemas/user.schema';
import { PrismaClient } from '@prisma/client';
import { revalidateTag } from 'next/cache';


const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const users = await prisma.user.findMany();
    
    if (users) {

      return NextResponse.json(users);
    }
  } catch (error) {
    return customErrorHandler(error);
  }

}
export async function PUT(req: Request) {
  
  const body = await req.json();
  const { name, role, email } = body;
  try {
    const updateUser = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        name: name,
        role: role,
        email: email,
      },
    });
    
    if (updateUser) {
      return NextResponse.json({ message: 'updated' });
    }
  } catch (error) {}
}

/* error TypeError: Cannot read properties of undefined (reading 'headers')
   to avoid the above error, it is required to return every response.*/
