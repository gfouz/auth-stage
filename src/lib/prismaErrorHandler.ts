import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

class CustomError extends Error {
  constructor(message = 'Something went wrong') {
    super(message);
    //for example.
    this.name = 'AuthenticationError';
    this.message = message;
  }
}

export function customErrorHandler(error) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        // handling duplicate key errors
        return NextResponse.json({
          message: `Duplicate field value: ${error.meta.target}`,
          PrismaCode: error.code,
        });
      case 'P2014':
        // handling invalid id errors
        return NextResponse.json({
          message: `Invalid ID: ${error.meta.target}`,
          PrismaCode: error.code,
        });
      case 'P2003':
        // handling invalid data errors
        return NextResponse.json({
          message: `Invalid input data with code: ${error.meta.target}`,
          PrismaCode: error.code,
        });
      default:
        // handling all other errors
        return NextResponse.json({
          message: `Something went wrong: ${error.message}`,
          PrismaCode: error.code,
        });
    }
  } else {
    return error.message;
  }
}
