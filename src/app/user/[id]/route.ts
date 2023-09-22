import { NextRequest, NextResponse } from 'next/server';
import { customErrorHandler } from '@/lib/prismaErrorHandler';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');

  console.log('this is the params :  ' + id);
  return NextResponse.json({ id: id });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  try {
    const deleted = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    if (deleted) {
      return NextResponse.json({ deleted });
    }
  } catch (error) {
    return customErrorHandler(error);
  }
}
