import { NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { createAuditLog } from '@/lib/audit'
import { AuthenticatedRequest } from '@/types/api'
import { withRole } from '@/middleware/auth'

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Create consent grant
    try {
      const { consumerId, purpose, scope, expiresAt } = req.body

      if (!consumerId || !purpose || !scope || !expiresAt) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      const grant = await prisma.consentGrant.create({
        data: {
          custodianId: req.user!.userId,
          consumerId,
          purpose,
          scope: JSON.stringify(scope),
          expiresAt: new Date(expiresAt),
        },
        include: {
          consumer: {
            select: { id: true, email: true, name: true },
          },
        },
      })

      // Audit log
      await createAuditLog({
        userId: req.user!.userId,
        consentId: grant.id,
        action: 'GRANT_CREATED',
        details: { consumerId, purpose, scope },
      })

      return res.status(201).json(grant)
    } catch (error) {
      console.error('Create grant error:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  } else if (req.method === 'GET') {
    // Get all grants for custodian
    try {
      const grants = await prisma.consentGrant.findMany({
        where: { custodianId: req.user!.userId },
        include: {
          consumer: {
            select: { id: true, email: true, name: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      })

      return res.status(200).json(grants)
    } catch (error) {
      console.error('Get grants error:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' })
  }
}

export default withRole('custodian', handler)
