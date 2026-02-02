import { prisma } from './prisma'

export interface AuditLogData {
  userId: string
  consentId?: string
  action: string
  details: any
  ipAddress?: string
  userAgent?: string
}

export async function createAuditLog(data: AuditLogData): Promise<void> {
  await prisma.auditLog.create({
    data: {
      userId: data.userId,
      consentId: data.consentId,
      action: data.action,
      details: JSON.stringify(data.details),
      ipAddress: data.ipAddress,
      userAgent: data.userAgent,
    },
  })
}
