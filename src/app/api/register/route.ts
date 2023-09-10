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
    const hashedPassword = await hash( password, 12);
  
    await prisma.$connect();
    
      const user = await prisma.user.create({ 
        data: {
          name: name,
          email: email,
          password: hashedPassword
        }
      })
      user ? NextResponse.json({message: "created"}) :
             NextResponse.json({message: "bad request!"})
     
  } catch (error: any) {
     return customErrorHandler(error)
  }
    

}
// warn(prisma-client) This is the 10th instance of Prisma Client being started. 
//Make sure this is intentional.