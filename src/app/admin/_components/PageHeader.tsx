import React from 'react'

export function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-4xl mb-4">{ children }</div>
  )
}
