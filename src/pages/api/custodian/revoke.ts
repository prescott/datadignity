import { NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { createAuditLog } from '@/lib/audit'
import { AuthenticatedRequest } from '@/types/api'
import { withRole } from '@/middleware/auth'

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { grantId } = req.body

    if (!grantId) {
      return res.status(400).json({ error: 'Missing grantId' })
    }

    // Find grant
    const grant = await prisma.consentGrant.findUnique({
      where: { id: grantId },
    })

    if (!grant) {
      return res.status(404).json({ error: 'Grant not found' })
    }

    // Check ownership
    if (grant.custodianId !== req.user!.userId) {
      return res.status(403).json({ error: 'Not authorized to revoke this grant' })
    }

    // Revoke grant (deny downstream)
    const updated = await prisma.consentGrant.update({
      where: { id: grantId },
      data: {
        isActive: false,
        revokedAt: new Date(),
      },
    })

    // Audit log
    await createAuditLog({
      userId: req.user!.userId,
      consentId: grantId,
      action: 'GRANT_REVOKED',
      details: { grantId, reason: 'Custodian revocation' },
    })

    return res.status(200).json(updated)
  } catch (error) {
    console.error('Revoke grant error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export default withRole('custodian', handler)
