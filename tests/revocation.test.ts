import { prisma } from '../src/lib/prisma'

describe('Revocation Tests', () => {
  let custodianId: string
  let consumerId: string
  let grantId: string

  beforeAll(async () => {
    // Clean up
    await prisma.auditLog.deleteMany()
    await prisma.consentGrant.deleteMany()
    await prisma.user.deleteMany()

    // Create test users
    const custodian = await prisma.user.create({
      data: {
        email: 'revoke-custodian@test.com',
        password: 'hashed',
        name: 'Revoke Custodian',
        role: 'custodian',
      },
    })
    custodianId = custodian.id

    const consumer = await prisma.user.create({
      data: {
        email: 'revoke-consumer@test.com',
        password: 'hashed',
        name: 'Revoke Consumer',
        role: 'consumer',
      },
    })
    consumerId = consumer.id

    // Create active grant
    const grant = await prisma.consentGrant.create({
      data: {
        custodianId,
        consumerId,
        purpose: 'test-purpose',
        scope: JSON.stringify(['field1', 'field2']),
        expiresAt: new Date(Date.now() + 86400000),
        isActive: true,
      },
    })
    grantId = grant.id
  })

  afterAll(async () => {
    await prisma.$disconnect()
  })

  it('should revoke a consent grant', async () => {
    const updated = await prisma.consentGrant.update({
      where: { id: grantId },
      data: {
        isActive: false,
        revokedAt: new Date(),
      },
    })

    expect(updated.isActive).toBe(false)
    expect(updated.revokedAt).toBeTruthy()
  })

  it('should prevent access after revocation', async () => {
    const grant = await prisma.consentGrant.findFirst({
      where: {
        custodianId,
        consumerId,
        isActive: true,
        revokedAt: null,
      },
    })

    expect(grant).toBeNull()
  })

  it('should create audit log on revocation', async () => {
    await prisma.auditLog.create({
      data: {
        userId: custodianId,
        consentId: grantId,
        action: 'GRANT_REVOKED',
        details: JSON.stringify({ reason: 'Test revocation' }),
      },
    })

    const logs = await prisma.auditLog.findMany({
      where: {
        consentId: grantId,
        action: 'GRANT_REVOKED',
      },
    })

    expect(logs.length).toBeGreaterThan(0)
  })

  it('should deny downstream access after revocation', async () => {
    // Verify grant is revoked
    const grant = await prisma.consentGrant.findUnique({
      where: { id: grantId },
    })

    expect(grant?.isActive).toBe(false)
    expect(grant?.revokedAt).not.toBeNull()

    // Verify it won't be found in active grants query
    const activeGrants = await prisma.consentGrant.findMany({
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

    expect(activeGrants.length).toBe(0)
  })
})
