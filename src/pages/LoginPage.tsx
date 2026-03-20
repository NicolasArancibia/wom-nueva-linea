import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileShell from '../components/layout/MobileShell'
import WomButton from '../components/ui/WomButton'
import WomInput from '../components/ui/WomInput'

export default function LoginPage() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [recordar, setRecordar] = useState(false)

  const puedeIngresar = usuario.length > 0 && password.length > 0

  return (
    <MobileShell>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '32px 24px 24px' }}>

        {/* Logo placeholder */}
        <div style={{
          background: '#f1f3f4',
          borderRadius: '8px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
        }}>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#9B00C4', letterSpacing: '-1px' }}>
            WOM
          </span>
        </div>

        <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#202124', marginBottom: '24px', textAlign: 'center' }}>
          ¡Bienvenido!
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
          <WomInput
            label="Ingresa tu usuario corporativo"
            placeholder="Usuario"
            value={usuario}
            onChange={setUsuario}
          />
          <WomInput
            label="Ingresa tu contraseña"
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={setPassword}
          />
        </div>

        {/* Recordar sesión */}
        <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13px',
          color: '#5f6368',
          marginBottom: '20px',
          cursor: 'pointer',
        }}>
          <input
            type="checkbox"
            checked={recordar}
            onChange={(e) => setRecordar(e.target.checked)}
            style={{ accentColor: '#9B00C4' }}
          />
          Recordar mi sesión
        </label>

        <WomButton
          fullWidth
          disabled={!puedeIngresar}
          onClick={() => navigate('/home')}
        >
          Ingresar
        </WomButton>

        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#9B00C4',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            textDecoration: 'underline',
            marginTop: '16px',
            textAlign: 'center',
          }}
        >
          ¿Olvidaste tu contraseña?
        </button>

        {/* Aviso info */}
        <div style={{
          marginTop: 'auto',
          border: '1px solid #e8eaed',
          borderRadius: '4px',
          padding: '12px',
          display: 'flex',
          gap: '8px',
          background: '#f8f9fa',
        }}>
          <span style={{ color: '#9B00C4', fontSize: '16px', flexShrink: 0 }}>ℹ</span>
          <span style={{ fontSize: '12px', color: '#80868b' }}>
            Si necesitas ayuda comunícate con tu supervisor.
          </span>
        </div>

      </div>
    </MobileShell>
  )
}
