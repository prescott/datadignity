# Data Dignity

A Replit-friendly TypeScript prototype for humanitarian data consent management, built with Next.js, Prisma, and SQLite.

## Overview

Data Dignity is a platform that enables individuals (custodians) to grant, manage, and revoke consent for their humanitarian data. Organizations (consumers) can request access to data with explicit consent, and all actions are tracked in an immutable audit log.

## Features

- **Authentication**: Secure user registration and login with JWT tokens
- **Consent Management**: Custodians can grant data access with specific purpose, scope, and expiry
- **Revocation**: Instant revocation that denies downstream access
- **Policy Middleware**: Automated consent validation before data access
- **Audit Log**: Append-only logging of all consent and access events
- **Role-Based Access**: Separate interfaces for custodians and consumers
- **Replit-Ready**: Configured for easy deployment on Replit

## Tech Stack

- **Frontend**: Next.js 13 + React 18 + TypeScript
- **Backend**: Next.js API Routes
- **Database**: SQLite with Prisma ORM
- **Authentication**: JWT with bcrypt password hashing
- **Testing**: Jest + ts-jest

## Getting Started

### Prerequisites

- Node.js 16+ (or use Replit)
- npm or yarn

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/prescott/datadignity.git
cd datadignity
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env and set your JWT_SECRET
```

4. Initialize the database:
```bash
npm run db:generate
npm run db:push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Replit Deployment

1. Import this repository into Replit
2. Replit will automatically detect the `.replit` file
3. Click "Run" to start the application
4. The app will be available at your Replit URL

## Usage

### User Registration

1. Navigate to the home page
2. Click "Register"
3. Choose your role:
   - **Custodian**: Data owner who grants consent
   - **Consumer**: Organization requesting data access
4. Fill in your details and submit

### Custodian Workflow

1. Log in as a custodian
2. View existing consent grants
3. Revoke consent at any time
4. All actions are logged in the audit trail

### Consumer Workflow

1. Log in as a consumer
2. View available consent grants
3. Access data (only if consent is active and valid)
4. All access attempts are logged

## API Endpoints

See [API.md](./API.md) for detailed API documentation.

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Custodian APIs
- `GET /api/custodian/grants` - List all grants
- `POST /api/custodian/grants` - Create consent grant
- `POST /api/custodian/revoke` - Revoke consent

### Consumer APIs
- `GET /api/consumer/grants` - List available grants
- `POST /api/consumer/data` - Access data (requires valid consent)

### Audit
- `GET /api/audit/logs` - View audit logs

## Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Security

See [SECURITY.md](./SECURITY.md) for security considerations and best practices.

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for system architecture details.

## License

ISC

## Contributing

This is a prototype for demonstration purposes. For production use, additional security measures and features should be implemented.

## Support

For issues or questions, please open an issue on GitHub.