import { Request, Response } from 'express';
import { getHealthStatus } from '../services/health.service';

export const healthCheck = async (_req: Request, res: Response): Promise<void> => {
  try {
    const healthStatus = await getHealthStatus();
    res.status(healthStatus.status === 'ok' ? 200 : 500).json(healthStatus);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      database: 'disconnected',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
