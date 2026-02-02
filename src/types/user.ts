export interface User {
  id: string
  email: string
  name: string
  role: 'custodian' | 'consumer'
}

export interface Grant {
  id: string
  custodianId: string
  consumerId: string
  purpose: string
  scope: string
  expiresAt: string
  revokedAt: string | null
  isActive: boolean
  createdAt: string
  updatedAt: string
}
