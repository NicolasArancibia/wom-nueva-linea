interface Props {
  label?: string
  placeholder?: string
  value: string
  onChange: (v: string) => void
  type?: string
  hint?: string
  error?: string
}

export default function WomInput({
  label, placeholder, value, onChange, type = 'text', hint, error,
}: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {label && (
        <label style={{ fontSize: '12px', fontWeight: 600, color: '#3c4043' }}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '10px 12px',
          border: `1px solid ${error ? '#d93025' : '#dadce0'}`,
          borderRadius: '4px',
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
          outline: 'none',
          color: '#202124',
          background: '#fff',
        }}
      />
      {hint && !error && (
        <span style={{ fontSize: '11px', color: '#80868b' }}>{hint}</span>
      )}
      {error && (
        <span style={{ fontSize: '11px', color: '#d93025' }}>{error}</span>
      )}
    </div>
  )
}
