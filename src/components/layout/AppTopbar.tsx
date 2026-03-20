import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  showBack?: boolean
}

export default function AppTopbar({ title, showBack = true }: Props) {
  const navigate = useNavigate()

  return (
    <div style={{
      height: '56px',
      background: '#fff',
      borderBottom: '1px solid #e8eaed',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      gap: '12px',
      flexShrink: 0,
    }}>
      {showBack && (
        <button
          onClick={() => navigate(-1)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            color: '#9B00C4',
            fontSize: '20px',
          }}
        >
          ‹
        </button>
      )}
      <span style={{
        flex: 1,
        fontWeight: 600,
        fontSize: '16px',
        color: '#202124',
      }}>
        {title}
      </span>
      <button style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        padding: '4px',
      }}>
        <span style={{ display: 'block', width: '20px', height: '2px', background: '#9B00C4' }} />
        <span style={{ display: 'block', width: '20px', height: '2px', background: '#9B00C4' }} />
        <span style={{ display: 'block', width: '20px', height: '2px', background: '#9B00C4' }} />
      </button>
    </div>
  )
}