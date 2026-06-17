import { prisma } from './prisma.service';

export interface HealthStatus {
  status: 'ok' | 'error';
  uptime: number;
  timestamp: string;
  database: 'connected' | 'disconnected';
}

export const getHealthStatus = async (): Promise<HealthStatus> => {
  let databaseStatus: 'connected' | 'disconnected' = 'disconnected';
  try {
    await prisma.$queryRaw`SELECT 1`;
    databaseStatus = 'connected';
  } catch (error) {
    console.error('Database connection check failed:', error);
    databaseStatus = 'disconnected';
  }

  return {
    status: databaseStatus === 'connected' ? 'ok' : 'error',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    database: databaseStatus
  };
};
