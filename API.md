# API Documentation

## Overview

The Data Dignity API provides RESTful endpoints for managing humanitarian data consent. All endpoints (except authentication) require JWT authentication via the `Authorization` header.

## Authentication

All authenticated requests must include:
```
Authorization: Bearer <jwt_token>
```

### Error Responses

All endpoints may return these errors:
- `401 Unauthorized`: Missing or invalid token
- `403 Forbidden`: Insufficient permissions
- `500 Internal Server Error`: Server error

---

## Authentication Endpoints

### Register User

Create a new user account.

**Endpoint:** `POST /api/auth/register`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword",
  "name": "John Doe",
  "role": "custodian"
}
```

**Parameters:**
- `email` (string, required): Valid email address
- `password` (string, required): User password
- `name` (string, required): Full name
- `role` (string, required): Either "custodian" or "consumer"

**Success Response (201):**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "custodian"
  },
  "token": "jwt_token_string"
}
```

**Error Responses:**
- `400 Bad Request`: Missing fields or invalid role
- `400 Bad Request`: User already exists

---

### Login

Authenticate an existing user.

**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Parameters:**
- `email` (string, required): User email
- `password` (string, required): User password

**Success Response (200):**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "custodian"
  },
  "token": "jwt_token_string"
}
```

**Error Responses:**
- `400 Bad Request`: Missing email or password
- `401 Unauthorized`: Invalid credentials

---

## Custodian Endpoints

Requires `custodian` role.

### List Grants

Get all consent grants created by the custodian.

**Endpoint:** `GET /api/custodian/grants`

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Success Response (200):**
```json
[
  {
    "id": "grant-uuid",
    "custodianId": "custodian-uuid",
    "consumerId": "consumer-uuid",
    "purpose": "emergency response",
    "scope": "[\"name\",\"location\"]",
    "expiresAt": "2024-12-31T23:59:59Z",
    "revokedAt": null,
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z",
    "consumer": {
      "id": "consumer-uuid",
      "email": "consumer@example.com",
      "name": "Aid Organization"
    }
  }
]
```

---

### Create Grant

Create a new consent grant.

**Endpoint:** `POST /api/custodian/grants`

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "consumerId": "consumer-uuid",
  "purpose": "medical research",
  "scope": ["name", "age", "medical_history"],
  "expiresAt": "2024-12-31T23:59:59Z"
}
```

**Parameters:**
- `consumerId` (string, required): ID of the consumer receiving access
- `purpose` (string, required): Specific purpose for data use
- `scope` (array, required): List of data fields granted
- `expiresAt` (string, required): ISO 8601 timestamp when grant expires

**Success Response (201):**
```json
{
  "id": "grant-uuid",
  "custodianId": "custodian-uuid",
  "consumerId": "consumer-uuid",
  "purpose": "medical research",
  "scope": "[\"name\",\"age\",\"medical_history\"]",
  "expiresAt": "2024-12-31T23:59:59Z",
  "revokedAt": null,
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-01T00:00:00Z",
  "consumer": {
    "id": "consumer-uuid",
    "email": "consumer@example.com",
    "name": "Research Institute"
  }
}
```

**Error Responses:**
- `400 Bad Request`: Missing required fields

---

### Revoke Grant

Revoke a consent grant, immediately denying downstream access.

**Endpoint:** `POST /api/custodian/revoke`

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "grantId": "grant-uuid"
}
```

**Parameters:**
- `grantId` (string, required): ID of the grant to revoke

**Success Response (200):**
```json
{
  "id": "grant-uuid",
  "custodianId": "custodian-uuid",
  "consumerId": "consumer-uuid",
  "purpose": "medical research",
  "scope": "[\"name\",\"age\"]",
  "expiresAt": "2024-12-31T23:59:59Z",
  "revokedAt": "2024-06-15T10:30:00Z",
  "isActive": false,
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-06-15T10:30:00Z"
}
```

**Error Responses:**
- `400 Bad Request`: Missing grantId
- `403 Forbidden`: Not authorized to revoke this grant
- `404 Not Found`: Grant not found

---

## Consumer Endpoints

Requires `consumer` role.

### List Available Grants

Get all consent grants available to the consumer.

**Endpoint:** `GET /api/consumer/grants`

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Success Response (200):**
```json
[
  {
    "id": "grant-uuid",
    "custodianId": "custodian-uuid",
    "consumerId": "consumer-uuid",
    "purpose": "emergency response",
    "scope": "[\"name\",\"location\"]",
    "expiresAt": "2024-12-31T23:59:59Z",
    "revokedAt": null,
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z",
    "custodian": {
      "id": "custodian-uuid",
      "email": "custodian@example.com",
      "name": "Jane Smith"
    }
  }
]
```

---

### Access Data

Access custodian data with valid consent.

**Endpoint:** `POST /api/consumer/data`

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "custodianId": "custodian-uuid",
  "purpose": "emergency response",
  "requestedData": ["name", "location"]
}
```

**Parameters:**
- `custodianId` (string, required): ID of the data custodian
- `purpose` (string, required): Must match granted purpose
- `requestedData` (array, optional): Specific fields requested

**Success Response (200):**
```json
{
  "custodianId": "custodian-uuid",
  "purpose": "emergency response",
  "data": {
    "name": "Sample Name",
    "age": 30,
    "location": "Sample Location"
  },
  "accessedAt": "2024-06-15T10:30:00Z"
}
```

**Error Responses:**
- `400 Bad Request`: Missing custodianId or purpose
- `403 Forbidden`: No active consent grant found
- `403 Forbidden`: Purpose does not match consent grant

**Policy Validation:**
This endpoint enforces consent policy:
- Grant must be active
- Grant must not be revoked
- Grant must not be expired
- Purpose must match exactly

---

## Audit Endpoints

Requires authentication (any role).

### View Audit Logs

Get audit logs for the authenticated user.

**Endpoint:** `GET /api/audit/logs`

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Success Response (200):**
```json
[
  {
    "id": "log-uuid",
    "userId": "user-uuid",
    "consentId": "grant-uuid",
    "action": "GRANT_CREATED",
    "details": "{\"consumerId\":\"consumer-uuid\",\"purpose\":\"research\"}",
    "ipAddress": "192.168.1.1",
    "userAgent": "Mozilla/5.0...",
    "timestamp": "2024-06-15T10:30:00Z"
  }
]
```

**Notes:**
- Returns last 100 logs
- Ordered by timestamp (most recent first)
- Details field contains JSON string

**Audit Actions:**
- `USER_REGISTERED`: New user created
- `USER_LOGGED_IN`: User authenticated
- `GRANT_CREATED`: Consent grant created
- `GRANT_REVOKED`: Consent grant revoked
- `DATA_ACCESSED`: Data accessed by consumer

---

## Rate Limiting

Currently no rate limiting (prototype). Production should implement:
- 100 requests per 15 minutes per IP
- 1000 requests per day per user
- Exponential backoff on failed auth attempts

## Pagination

Currently no pagination (prototype). Production should implement:
- `page` and `limit` query parameters
- `total`, `page`, `pages` in response metadata
- Default limit of 50 items

## Versioning

API version: v1 (implicit in current endpoints)

Future versions should use URL versioning:
- `/api/v1/auth/login`
- `/api/v2/auth/login`

## WebSocket Support

Not currently supported. Future enhancement for real-time notifications:
- Consent grant notifications
- Revocation alerts
- Audit log streaming

## Example Workflows

### Complete Custodian Flow

```bash
# 1. Register as custodian
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "custodian@example.com",
    "password": "securepass",
    "name": "Jane Custodian",
    "role": "custodian"
  }'

# 2. Create consent grant (use token from step 1)
curl -X POST http://localhost:3000/api/custodian/grants \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "consumerId": "consumer-uuid",
    "purpose": "emergency response",
    "scope": ["name", "location"],
    "expiresAt": "2024-12-31T23:59:59Z"
  }'

# 3. Revoke grant
curl -X POST http://localhost:3000/api/custodian/revoke \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "grantId": "grant-uuid"
  }'
```

### Complete Consumer Flow

```bash
# 1. Register as consumer
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "consumer@example.com",
    "password": "securepass",
    "name": "Aid Organization",
    "role": "consumer"
  }'

# 2. List available grants
curl -X GET http://localhost:3000/api/consumer/grants \
  -H "Authorization: Bearer <token>"

# 3. Access data
curl -X POST http://localhost:3000/api/consumer/data \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "custodianId": "custodian-uuid",
    "purpose": "emergency response",
    "requestedData": ["name", "location"]
  }'
```
