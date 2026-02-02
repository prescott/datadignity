import { NextApiResponse } from 'next'
import { verifyToken } from '@/lib/auth'
import { AuthenticatedRequest, NextApiHandler } from '@/types/api'

export function withAuth(handler: NextApiHandler): NextApiHandler {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    try {
      const authHeader = req.headers.authorization
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' })
      }

      const token = authHeader.substring(7)
      const payload = verifyToken(token)
      req.user = payload

      return handler(req, res)
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' })
    }
  }
}

export function withRole(role: string, handler: NextApiHandler): NextApiHandler {
  return withAuth(async (req: AuthenticatedRequest, res: NextApiResponse) => {
    if (req.user?.role !== role) {
      return res.status(403).json({ error: 'Forbidden' })
    }
    return handler(req, res)
  })
}
