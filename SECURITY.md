# Security

## Overview

Data Dignity implements security best practices for a prototype application. This document outlines the security measures in place and recommendations for production deployment.

## Current Security Measures

### Authentication

#### Password Security
- **Hashing**: Passwords hashed using bcrypt with 10 rounds
- **Salt**: Automatic salt generation by bcrypt
- **No Plain Text**: Passwords never stored or transmitted in plain text
- **Validation**: Minimum password requirements (to be enhanced)

#### JWT Tokens
- **Algorithm**: HS256 (HMAC-SHA256)
- **Expiry**: 7-day token lifetime
- **Secret**: Configurable via environment variable
- **Payload**: Contains userId, email, and role only

### Authorization

#### Role-Based Access Control (RBAC)
- Two roles: `custodian` and `consumer`
- Middleware enforces role requirements
- Users can only access resources they own or have consent for

#### Consent Policies
- Policy middleware validates all data access requests
- Checks for:
  - Active grant existence
  - Purpose match
  - Expiry date
  - Revocation status
- Immediate enforcement of revocations

### Data Protection

#### Consent Management
- **Explicit Consent**: Users must explicitly grant access
- **Purpose Limitation**: Data access tied to specific purpose
- **Scope Control**: JSON-defined field-level permissions
- **Time-Limited**: All grants have expiry dates
- **Revocable**: Instant revocation capability

#### Audit Trail
- **Immutable Logs**: Append-only, never deleted
- **Comprehensive**: All actions logged
- **Forensic**: IP address and user agent tracked
- **Timestamped**: Precise action timing
- **Privacy**: Sensitive data not logged in details

### Database Security
- **Parameterized Queries**: Prisma prevents SQL injection
- **Type Safety**: TypeScript + Prisma ensure type correctness
- **Isolated**: SQLite file permissions
- **No Direct Access**: All access through ORM

## Known Limitations (Prototype)

### Critical Issues for Production

1. **JWT Storage**
   - Currently in localStorage (vulnerable to XSS)
   - **Fix**: Use HTTP-only secure cookies

2. **JWT Secret**
   - Single static secret
   - **Fix**: Rotate secrets, use asymmetric keys (RS256)

3. **No Rate Limiting**
   - Vulnerable to brute force attacks
   - **Fix**: Implement rate limiting (express-rate-limit)

4. **No Input Validation**
   - Limited validation on inputs
   - **Fix**: Add Zod schemas for all inputs

5. **No HTTPS Enforcement**
   - Development uses HTTP
   - **Fix**: Force HTTPS in production

6. **No Password Requirements**
   - Weak passwords allowed
   - **Fix**: Enforce strong password policy

7. **No Account Lockout**
   - No protection against brute force
   - **Fix**: Lock accounts after failed attempts

8. **No Email Verification**
   - Users not verified
   - **Fix**: Add email verification flow

9. **No Multi-Factor Authentication**
   - Single factor only
   - **Fix**: Add TOTP or SMS 2FA

10. **Database Encryption**
    - SQLite file not encrypted
    - **Fix**: Use SQLite encryption or encrypted filesystem

## Production Recommendations

### Immediate Priorities (P0)

1. **Migrate Token Storage**
   ```typescript
   // Use HTTP-only secure cookies
   res.setHeader('Set-Cookie', serialize('token', token, {
     httpOnly: true,
     secure: process.env.NODE_ENV === 'production',
     sameSite: 'strict',
     maxAge: 604800, // 7 days
     path: '/',
   }))
   ```

2. **Add Input Validation**
   ```typescript
   import { z } from 'zod'
   
   const registerSchema = z.object({
     email: z.string().email(),
     password: z.string().min(12).regex(/[A-Z]/).regex(/[0-9]/),
     name: z.string().min(2).max(100),
     role: z.enum(['custodian', 'consumer']),
   })
   ```

3. **Implement Rate Limiting**
   ```typescript
   import rateLimit from 'express-rate-limit'
   
   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100, // limit each IP to 100 requests per windowMs
   })
   ```

4. **Add CORS Configuration**
   ```typescript
   const corsOptions = {
     origin: process.env.ALLOWED_ORIGINS?.split(','),
     credentials: true,
   }
   ```

5. **Enable Security Headers**
   ```typescript
   // Use helmet.js
   import helmet from 'helmet'
   
   app.use(helmet({
     contentSecurityPolicy: {
       directives: {
         defaultSrc: ["'self'"],
         styleSrc: ["'self'", "'unsafe-inline'"],
       },
     },
   }))
   ```

### High Priority (P1)

1. **Add Email Verification**
2. **Implement Password Reset**
3. **Add Account Lockout**
4. **Enable Audit Log Monitoring**
5. **Add Data Encryption at Rest**
6. **Implement Session Management**
7. **Add CSRF Protection**

### Medium Priority (P2)

1. **Multi-Factor Authentication**
2. **Add Security Logging**
3. **Implement IP Whitelisting**
4. **Add Anomaly Detection**
5. **Penetration Testing**
6. **Security Audit**

## GDPR Compliance

### Current Features
- ✅ Right to Consent
- ✅ Right to Withdraw Consent
- ✅ Purpose Limitation
- ✅ Data Minimization (scope control)
- ✅ Audit Trail
- ⚠️ Right to Access (partial)
- ❌ Right to Erasure
- ❌ Right to Portability
- ❌ Privacy Policy
- ❌ Cookie Consent

### Production Requirements
1. Add data export functionality
2. Implement data deletion (with audit retention)
3. Add privacy policy and terms of service
4. Implement cookie consent banner
5. Add data processing agreements
6. Document data flows and processors

## Vulnerability Disclosure

### Reporting
For security issues, please email security@example.com

### Process
1. Report received and acknowledged within 24 hours
2. Issue validated and severity assessed
3. Fix developed and tested
4. Security advisory published
5. Credits given to reporter

## Security Checklist

### Deployment
- [ ] Generate new JWT_SECRET
- [ ] Enable HTTPS
- [ ] Configure CORS properly
- [ ] Set secure cookie flags
- [ ] Enable rate limiting
- [ ] Configure CSP headers
- [ ] Set up logging and monitoring
- [ ] Regular dependency updates
- [ ] Security scanning in CI/CD
- [ ] Backup strategy implemented

### Monitoring
- [ ] Failed login attempts
- [ ] Unusual access patterns
- [ ] Large data exports
- [ ] Rapid consent changes
- [ ] Database errors
- [ ] API errors and anomalies

## Dependencies

### Security Audit
Run regular security audits:
```bash
npm audit
npm audit fix
```

### Keep Updated
Update dependencies regularly:
```bash
npm update
npm outdated
```

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP API Security](https://owasp.org/www-project-api-security/)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [GDPR Compliance](https://gdpr.eu/)
- [Data Protection by Design](https://edpb.europa.eu/our-work-tools/public-consultations-art-704/2019/guidelines-42019-article-25-data-protection-design_en)
