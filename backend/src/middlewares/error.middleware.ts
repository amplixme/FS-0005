import { Request, Response, NextFunction } from 'express';
import { Prisma } from '../generated/prisma/client';
import { error as sendError } from '../utils/response';

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  
  console.error('Captured Error:', err);

  let status = 500;
  let message = 'Internal Server Error';

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case 'P2002':
        status = 409;
        message = 'Conflict: Unique constraint failed.';
        break;
      case 'P2025':
        status = 404;
        message = 'Not Found: Record not found.';
        break;
      default:
        status = 400;
        message = `Database Error: ${err.message}`;
    }
  } else if (err instanceof Error) {
    status = (err as any).status || (err as any).statusCode || 500;
    message = err.message;
  } else if (typeof err === 'string') {
    message = err;
  }

  sendError(res, message, status);
};
