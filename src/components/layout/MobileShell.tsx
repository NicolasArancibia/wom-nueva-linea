import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function MobileShell({ children }: Props) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#e8eaed',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '24px',
      paddingBottom: '24px',
    }}>
      <div style={{
        width: '390px',
        minHeight: '844px',
        background: '#ffffff',
        borderRadius: '40px',
        overflow: 'hidden',
        boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
        {/* Status bar simulada */}
        <div style={{
          height: '44px',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 28px',
          fontSize: '12px',
          fontWeight: 600,
          flexShrink: 0,
        }}>
          <span>9:41</span>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span>●●●</span>
            <span>WiFi</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Contenido de la pantalla */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  )
}