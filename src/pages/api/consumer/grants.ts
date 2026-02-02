import { NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { AuthenticatedRequest } from '@/types/api'
import { withRole } from '@/middleware/auth'

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const grants = await prisma.consentGrant.findMany({
      where: { consumerId: req.user!.userId },
      include: {
        custodian: {
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
}

export default withRole('consumer', handler)
