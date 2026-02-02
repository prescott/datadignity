import { NextApiRequest, NextApiResponse } from 'next'
import { JWTPayload } from '@/lib/auth'

export interface AuthenticatedRequest extends NextApiRequest {
  user?: JWTPayload
}

export type NextApiHandler = (
  req: AuthenticatedRequest,
  res: NextApiResponse
) => Promise<void> | void
