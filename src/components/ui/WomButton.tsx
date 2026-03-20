import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  fullWidth?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function WomButton({
  children,
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
}: Props) {
  const styles: Record<string, React.CSSProperties> = {
    primary: {
      background: disabled ? '#bdc1c6' : '#9B00C4',
      color: '#fff',
      border: 'none',
    },
    secondary: {
      background: '#fff',
      color: '#9B00C4',
      border: '1px solid #9B00C4',
    },
    ghost: {
      background: 'transparent',
      color: '#9B00C4',
      border: 'none',
      textDecoration: 'underline',
    },
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        ...styles[variant],
        width: fullWidth ? '100%' : 'auto',
        padding: '12px 20px',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: 600,
        fontFamily: 'Inter, sans-serif',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.15s ease',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
    >
      {children}
    </button>
  )
}