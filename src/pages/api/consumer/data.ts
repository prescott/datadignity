import { NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { createAuditLog } from '@/lib/audit'
import { AuthenticatedRequest } from '@/types/api'
import { withConsentPolicy } from '@/middleware/policy'

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { custodianId, purpose, requestedData } = req.body

    // Policy middleware already checked consent
    // Here we simulate data access
    
    const mockData = {
      custodianId,
      purpose,
      data: {
        // Mock data based on requested fields
        name: 'Sample Name',
        age: 30,
        location: 'Sample Location',
      },
      accessedAt: new Date(),
    }

    // Audit log
    await createAuditLog({
      userId: req.user!.userId,
      action: 'DATA_ACCESSED',
      details: { custodianId, purpose, requestedData },
    })

    return res.status(200).json(mockData)
  } catch (error) {
    console.error('Data access error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export default withConsentPolicy(handler)
