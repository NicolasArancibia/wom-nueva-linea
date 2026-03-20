import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
  padding?: string
  shadow?: boolean
  border?: boolean
}

export default function WomCard({
  children,
  padding = '16px',
  shadow = true,
  border = true,
}: Props) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '4px',
      padding,
      border: border ? '1px solid #e8eaed' : 'none',
      boxShadow: shadow ? '0 1px 4px rgba(0,0,0,0.10)' : 'none',
    }}>
      {children}
    </div>
  )
}