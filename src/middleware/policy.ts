import { NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { AuthenticatedRequest, NextApiHandler } from '@/types/api'
import { withAuth } from './auth'

export interface PolicyCheckResult {
  allowed: boolean
  reason?: string
}

export async function checkConsentPolicy(
  consumerId: string,
  custodianId: string,
  purpose: string
): Promise<PolicyCheckResult> {
  // Find active consent grant
  const grant = await prisma.consentGrant.findFirst({
    where: {
      custodianId,
      consumerId,
      isActive: true,
      revokedAt: null,
      expiresAt: {
        gt: new Date(),
      },
    },
  })

  if (!grant) {
    return {
      allowed: false,
      reason: 'No active consent grant found',
    }
  }

  // Check if purpose matches
  if (grant.purpose !== purpose) {
    return {
      allowed: false,
      reason: 'Purpose does not match consent grant',
    }
  }

  return { allowed: true }
}

export function withConsentPolicy(handler: NextApiHandler): NextApiHandler {
  return withAuth(async (req: AuthenticatedRequest, res: NextApiResponse) => {
    const { custodianId, purpose } = req.body || req.query

    if (!custodianId || !purpose) {
      return res.status(400).json({ error: 'Missing custodianId or purpose' })
    }

    const consumerId = req.user!.userId
    const policyCheck = await checkConsentPolicy(consumerId, custodianId as string, purpose as string)

    if (!policyCheck.allowed) {
      return res.status(403).json({ error: policyCheck.reason })
    }

    return handler(req, res)
  })
}
