import { NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { AuthenticatedRequest } from '@/types/api'
import { withAuth } from '@/middleware/auth'

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const logs = await prisma.auditLog.findMany({
      where: { userId: req.user!.userId },
      orderBy: { timestamp: 'desc' },
      take: 100,
    })

    return res.status(200).json(logs)
  } catch (error) {
    console.error('Get audit logs error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export default withAuth(handler)
