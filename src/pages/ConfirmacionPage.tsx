import { useNavigate } from 'react-router-dom'
import MobileShell from '../components/layout/MobileShell'
import AppTopbar from '../components/layout/AppTopbar'
import StepBar from '../components/layout/StepBar'
import WomButton from '../components/ui/WomButton'
import { useActivacionStore } from '../store/activacionStore'

export default function ConfirmacionPage() {
  const navigate = useNavigate()
  const { ordenId, reset } = useActivacionStore()

  function handleVolver() {
    reset()
    navigate('/home')
  }

  return (
    <MobileShell>
      <AppTopbar title="" showBack={false} />
      <StepBar currentStep={5} />

      <div style={{
        flex: 1, display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: '24px',
      }}>
        {/* Modal de éxito */}
        <div style={{
          background: '#fff', borderRadius: '12px',
          padding: '32px 24px', textAlign: 'center',
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          width: '100%', maxWidth: '320px',
          position: 'relative',
        }}>
          <button
            onClick={handleVolver}
            style={{
              position: 'absolute', top: '12px', right: '12px',
              background: 'none', border: '1px solid #dadce0',
              borderRadius: '50%', width: '28px', height: '28px',
              cursor: 'pointer', fontSize: '14px', color: '#5f6368',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>

          {/* Ícono éxito */}
          <div style={{
            width: '64px', height: '64px', borderRadius: '50%',
            background: '#3d8f3d', display: 'flex', alignItems: 'center',
            justifyContent: 'center', margin: '0 auto 20px',
            boxShadow: '0 4px 16px rgba(61,143,61,0.3)',
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
              stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <p style={{ fontSize: '16px', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>
            ¡Venta finalizada con éxito!
          </p>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#202124', marginBottom: '12px' }}>
            ID de Orden: {ordenId}
          </p>
          <p style={{ fontSize: '12px', color: '#80868b', marginBottom: '24px', lineHeight: 1.5 }}>
            El comprobante de la operación se envió al correo registrado.
          </p>

          <WomButton fullWidth onClick={handleVolver}>
            Volver al home
          </WomButton>
        </div>
      </div>
    </MobileShell>
  )
}