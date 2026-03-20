import { useNavigate } from 'react-router-dom'
import MobileShell from '../components/layout/MobileShell'
import AppTopbar from '../components/layout/AppTopbar'
import StepBar from '../components/layout/StepBar'
import WomButton from '../components/ui/WomButton'
import WomCard from '../components/ui/WomCard'

export default function ValidacionIdentidadPage() {
  const navigate = useNavigate()

  return (
    <MobileShell>
      <AppTopbar title="Ajustes" />
      <StepBar currentStep={3} />

      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <p style={{ fontSize: '14px', fontWeight: 700, color: '#202124' }}>
          Validación de identidad
        </p>

        {/* Vía cliente */}
        <WomCard>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1, paddingRight: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '16px' }}>📱</span>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#202124' }}>Vía cliente</p>
              </div>
              <p style={{ fontSize: '12px', color: '#80868b', lineHeight: 1.4 }}>
                El cliente realiza la validación desde su teléfono por un QR
              </p>
            </div>
            <WomButton onClick={() => navigate('/validacion-qr')}>
              Generar QR
            </WomButton>
          </div>
        </WomCard>

        {/* Vía ejecutivo */}
        <WomCard>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1, paddingRight: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '16px' }}>💼</span>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#202124' }}>Vía ejecutivo</p>
              </div>
              <p style={{ fontSize: '12px', color: '#80868b', lineHeight: 1.4 }}>
                La validación la realizará el ejecutivo desde este dispositivo.
              </p>
            </div>
            <WomButton onClick={() => navigate('/validacion-qr')}>
              Validar aquí
            </WomButton>
          </div>
        </WomCard>

        <button style={{
          background: 'none', border: 'none', color: '#9B00C4', fontSize: '13px',
          fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textAlign: 'center',
          marginTop: '8px',
        }}>
          ¿Necesitas ayuda?
        </button>

      </div>
    </MobileShell>
  )
}