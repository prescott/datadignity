import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

interface Grant {
  id: string
  custodianId: string
  purpose: string
  scope: string
  expiresAt: string
  revokedAt: string | null
  isActive: boolean
  createdAt: string
  custodian: {
    id: string
    name: string
    email: string
  }
}

export default function ConsumerDashboard() {
  const router = useRouter()
  const [grants, setGrants] = useState<Grant[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (!storedUser) {
      router.push('/')
      return
    }
    const userData = JSON.parse(storedUser)
    if (userData.role !== 'consumer') {
      router.push('/')
      return
    }
    setUser(userData)
    loadGrants()
  }, [])

  const loadGrants = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/consumer/grants', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await response.json()
      if (response.ok) {
        setGrants(data)
      }
    } catch (error) {
      console.error('Failed to load grants:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAccessData = async (grant: Grant) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/consumer/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          custodianId: grant.custodianId,
          purpose: grant.purpose,
          requestedData: JSON.parse(grant.scope),
        }),
      })

      const data = await response.json()
      if (response.ok) {
        alert('Data accessed successfully!\n\n' + JSON.stringify(data, null, 2))
      } else {
        alert('Failed to access data: ' + data.error)
      }
    } catch (error) {
      alert('Error accessing data')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/')
  }

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Consumer Dashboard - Data Dignity</title>
      </Head>
      <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
        <nav style={{ backgroundColor: 'white', padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Data Dignity - Consumer</h1>
            <div>
              <span style={{ marginRight: '16px' }}>{user?.name}</span>
              <button onClick={handleLogout} style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Logout
              </button>
            </div>
          </div>
        </nav>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Available Consent Grants</h2>
            <p style={{ color: '#6b7280', marginBottom: '16px' }}>
              Data access permissions granted to you
            </p>
          </div>

          {grants.length === 0 ? (
            <div style={{ backgroundColor: 'white', padding: '48px', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ color: '#6b7280' }}>No consent grants available</p>
            </div>
          ) : (
            <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#f9fafb' }}>
                  <tr>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Custodian</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Purpose</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Scope</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Expires</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Status</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {grants.map((grant) => (
                    <tr key={grant.id} style={{ borderTop: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '12px' }}>
                        <div>{grant.custodian.name}</div>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>{grant.custodian.email}</div>
                      </td>
                      <td style={{ padding: '12px' }}>{grant.purpose}</td>
                      <td style={{ padding: '12px', fontSize: '12px' }}>{grant.scope}</td>
                      <td style={{ padding: '12px' }}>{new Date(grant.expiresAt).toLocaleDateString()}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: '500',
                          backgroundColor: grant.isActive ? '#d1fae5' : '#fee2e2',
                          color: grant.isActive ? '#065f46' : '#991b1b',
                        }}>
                          {grant.isActive ? 'Active' : 'Revoked'}
                        </span>
                      </td>
                      <td style={{ padding: '12px' }}>
                        {grant.isActive && (
                          <button
                            onClick={() => handleAccessData(grant)}
                            style={{
                              padding: '6px 12px',
                              backgroundColor: '#3b82f6',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '14px',
                            }}
                          >
                            Access Data
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
