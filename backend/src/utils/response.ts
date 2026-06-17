import { Response } from 'express';

export const success = (res: Response, data: any, status = 200): Response => {
  return res.status(status).json({
    status: 'success',
    data
  });
};

export const error = (res: Response, message: string, status = 500): Response => {
  return res.status(status).json({
    error: {
      message,
      status
    }
  });
};
