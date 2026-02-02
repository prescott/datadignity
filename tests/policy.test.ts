import { checkConsentPolicy } from '../src/middleware/policy'
import { prisma } from '../src/lib/prisma'

describe('Policy Middleware', () => {
  beforeAll(async () => {
    // Clean up test database
    await prisma.auditLog.deleteMany()
    await prisma.consentGrant.deleteMany()
    await prisma.user.deleteMany()
  })

  afterAll(async () => {
    await prisma.$disconnect()
  })

  it('should deny access when no consent grant exists', async () => {
    const result = await checkConsentPolicy('consumer-1', 'custodian-1', 'research')
    expect(result.allowed).toBe(false)
    expect(result.reason).toContain('No active consent grant')
  })

  it('should deny access when consent is revoked', async () => {
    // Create users
    const custodian = await prisma.user.create({
      data: {
        email: 'custodian@test.com',
        password: 'hashed',
        name: 'Custodian',
        role: 'custodian',
      },
    })

    const consumer = await prisma.user.create({
      data: {
        email: 'consumer@test.com',
        password: 'hashed',
        name: 'Consumer',
        role: 'consumer',
      },
    })

    // Create revoked grant
    await prisma.consentGrant.create({
      data: {
        custodianId: custodian.id,
        consumerId: consumer.id,
        purpose: 'research',
        scope: JSON.stringify(['name', 'age']),
        expiresAt: new Date(Date.now() + 86400000),
        isActive: false,
        revokedAt: new Date(),
      },
    })

    const result = await checkConsentPolicy(consumer.id, custodian.id, 'research')
    expect(result.allowed).toBe(false)
  })

  it('should allow access with valid consent grant', async () => {
    // Clean previous data
    await prisma.consentGrant.deleteMany()
    await prisma.user.deleteMany()

    // Create users
    const custodian = await prisma.user.create({
      data: {
        email: 'custodian2@test.com',
        password: 'hashed',
        name: 'Custodian 2',
        role: 'custodian',
      },
    })

    const consumer = await prisma.user.create({
      data: {
        email: 'consumer2@test.com',
        password: 'hashed',
        name: 'Consumer 2',
        role: 'consumer',
      },
    })

    // Create active grant
    await prisma.consentGrant.create({
      data: {
        custodianId: custodian.id,
        consumerId: consumer.id,
        purpose: 'emergency',
        scope: JSON.stringify(['name', 'location']),
        expiresAt: new Date(Date.now() + 86400000),
        isActive: true,
      },
    })

    const result = await checkConsentPolicy(consumer.id, custodian.id, 'emergency')
    expect(result.allowed).toBe(true)
  })

  it('should deny access when purpose does not match', async () => {
    const users = await prisma.user.findMany()
    const custodian = users.find((u) => u.role === 'custodian')
    const consumer = users.find((u) => u.role === 'consumer')

    const result = await checkConsentPolicy(consumer!.id, custodian!.id, 'different-purpose')
    expect(result.allowed).toBe(false)
    expect(result.reason).toContain('Purpose does not match')
  })
})
