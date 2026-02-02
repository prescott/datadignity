# Architecture

## System Overview

Data Dignity is a web-based consent management platform built on a three-tier architecture:

1. **Presentation Layer**: Next.js React frontend
2. **Application Layer**: Next.js API routes with middleware
3. **Data Layer**: SQLite database managed by Prisma ORM

## Components

### Frontend (Presentation Layer)

#### Pages
- **`/` (index.tsx)**: Authentication page with login/register
- **`/custodian` (custodian.tsx)**: Custodian dashboard for managing consent grants
- **`/consumer` (consumer.tsx)**: Consumer dashboard for viewing grants and accessing data

#### State Management
- Local state using React hooks
- JWT token and user data stored in localStorage
- No external state management library (minimal dependencies)

### Backend (Application Layer)

#### API Routes

**Authentication** (`/api/auth`)
- `register.ts`: User registration with role selection
- `login.ts`: User authentication with JWT generation

**Custodian APIs** (`/api/custodian`)
- `grants.ts`: Create and list consent grants
- `revoke.ts`: Revoke consent grants

**Consumer APIs** (`/api/consumer`)
- `grants.ts`: List available grants
- `data.ts`: Access data with consent validation

**Audit** (`/api/audit`)
- `logs.ts`: View audit logs

#### Middleware

**Authentication Middleware** (`/middleware/auth.ts`)
- `withAuth`: Validates JWT tokens
- `withRole`: Enforces role-based access control

**Policy Middleware** (`/middleware/policy.ts`)
- `checkConsentPolicy`: Validates consent grants before data access
- `withConsentPolicy`: Wrapper for endpoints requiring consent

### Data Layer

#### Database Schema

**User**
- Stores user credentials and profile
- Roles: `custodian` or `consumer`
- Password hashed with bcrypt

**ConsentGrant**
- Links custodian to consumer
- Includes purpose, scope (JSON), and expiry
- Supports revocation with `revokedAt` timestamp
- `isActive` flag for quick filtering

**AuditLog**
- Append-only log of all actions
- Includes user, action type, details (JSON)
- Stores IP address and user agent
- Never deleted or modified (immutable)

## Data Flow

### Grant Creation Flow
1. Custodian submits grant form
2. Frontend sends POST to `/api/custodian/grants`
3. `withRole` middleware validates custodian role
4. Grant created in database
5. Audit log entry created
6. Grant returned to frontend

### Data Access Flow
1. Consumer requests data
2. Frontend sends POST to `/api/consumer/data`
3. `withConsentPolicy` middleware:
   - Validates JWT token
   - Checks for active consent grant
   - Validates purpose matches
   - Checks expiry date
   - Verifies not revoked
4. If valid, data returned
5. Audit log entry created
6. If invalid, 403 Forbidden returned

### Revocation Flow
1. Custodian clicks "Revoke"
2. Frontend sends POST to `/api/custodian/revoke`
3. `withRole` middleware validates ownership
4. Grant updated: `isActive = false`, `revokedAt = now()`
5. Audit log entry created
6. All downstream access immediately denied

## Security Architecture

### Authentication
- Passwords hashed with bcrypt (10 rounds)
- JWT tokens with 7-day expiry
- Tokens stored in localStorage (client-side)
- All API routes protected by authentication middleware

### Authorization
- Role-based access control (RBAC)
- Custodians can only manage their own grants
- Consumers can only access data with valid consent
- Policy middleware enforces consent rules

### Audit Trail
- All actions logged with:
  - User ID
  - Timestamp
  - Action type
  - Details (JSON)
  - IP address
  - User agent
- Append-only (never deleted or modified)
- Supports forensic analysis and compliance

## Technology Choices

### Next.js
- Server-side rendering for better SEO
- API routes eliminate need for separate backend
- Built-in routing and optimization
- Great developer experience

### Prisma + SQLite
- Type-safe database access
- Simple schema definition
- SQLite requires no setup (file-based)
- Perfect for prototypes and Replit deployment
- Easy migration to PostgreSQL for production

### TypeScript
- Type safety reduces bugs
- Better IDE support
- Self-documenting code
- Industry standard for new projects

## Scalability Considerations

### Current Limitations (Prototype)
- SQLite single-file database
- No horizontal scaling
- Limited concurrent connections
- localStorage for client state

### Production Improvements
- Migrate to PostgreSQL or MongoDB
- Add Redis for session management
- Implement proper secret management (AWS Secrets Manager, etc.)
- Use secure HTTP-only cookies instead of localStorage
- Add rate limiting and DDoS protection
- Implement proper logging and monitoring
- Add database connection pooling
- Use CDN for static assets

## Deployment

### Replit
- Zero-config deployment
- `.replit` file specifies run command
- Environment variables in Replit Secrets
- Automatic HTTPS

### Alternative Platforms
- **Vercel**: Native Next.js support, serverless functions
- **Netlify**: Similar to Vercel with good DX
- **Railway**: Easy database management
- **Render**: Free tier with persistent storage

## Future Enhancements

1. **Granular Permissions**: Field-level consent control
2. **Consent Templates**: Predefined consent types
3. **Notifications**: Email/SMS alerts for consent events
4. **Data Portability**: Export user data in standard formats
5. **Multi-factor Authentication**: Enhanced security
6. **API Rate Limiting**: Prevent abuse
7. **Webhook Support**: Notify systems of consent changes
8. **Analytics Dashboard**: Consent metrics and insights
