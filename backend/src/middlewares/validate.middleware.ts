import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

export const validate = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const issues = err.issues.map(e => `${e.path.join('.')}: ${e.message}`).join(', ');
        const validationError = new Error(issues);
        (validationError as any).status = 400;
        return next(validationError);
      }
      next(err);
    }
  };
};
