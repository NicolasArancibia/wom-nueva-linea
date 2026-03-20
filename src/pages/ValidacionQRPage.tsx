import { useNavigate } from 'react-router-dom'
import MobileShell from '../components/layout/MobileShell'
import AppTopbar from '../components/layout/AppTopbar'
import StepBar from '../components/layout/StepBar'
import WomButton from '../components/ui/WomButton'
import { useActivacionStore } from '../store/activacionStore'

export default function ValidacionQRPage() {
  const navigate = useNavigate()
  const setStep = useActivacionStore((s) => s.setStep)

  function handleValidar() {
    setStep(4)
    navigate('/checkout')
  }

  return (
    <MobileShell>
      <AppTopbar title="Ajustes" />
      <StepBar currentStep={3} />

      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>

        <p style={{ fontSize: '14px', color: '#3c4043', textAlign: 'center', lineHeight: 1.5 }}>
          El cliente debe escanear este código para seguir
        </p>

        {/* QR simulado */}
        <div style={{
          width: '220px', height: '220px',
          border: '3px solid #9B00C4',
          borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: '#fff',
          boxShadow: '0 4px 16px rgba(155,0,196,0.15)',
          padding: '12px',
        }}>
          {/* QR SVG simulado con patrón */}
          <svg width="180" height="180" viewBox="0 0 180 180">
            {/* Esquinas QR */}
            <rect x="10" y="10" width="50" height="50" fill="none" stroke="#000" strokeWidth="6" rx="4"/>
            <rect x="20" y="20" width="30" height="30" fill="#000" rx="2"/>
            <rect x="120" y="10" width="50" height="50" fill="none" stroke="#000" strokeWidth="6" rx="4"/>
            <rect x="130" y="20" width="30" height="30" fill="#000" rx="2"/>
            <rect x="10" y="120" width="50" height="50" fill="none" stroke="#000" strokeWidth="6" rx="4"/>
            <rect x="20" y="130" width="30" height="30" fill="#000" rx="2"/>
            {/* Puntos centro simulados */}
            {[70,80,90,100,110].map(x =>
              [70,80,90,100,110].map(y =>
                Math.random() > 0.5
                  ? <rect key={`${x}-${y}`} x={x} y={y} width="8" height="8" fill="#000" rx="1"/>
                  : null
              )
            )}
            {/* Filas puntos extra */}
            <rect x="70" y="10" width="8" height="8" fill="#000"/>
            <rect x="85" y="10" width="8" height="8" fill="#000"/>
            <rect x="100" y="10" width="8" height="8" fill="#000"/>
            <rect x="70" y="25" width="8" height="8" fill="#000"/>
            <rect x="100" y="25" width="8" height="8" fill="#000"/>
            <rect x="10" y="70" width="8" height="8" fill="#000"/>
            <rect x="10" y="85" width="8" height="8" fill="#000"/>
            <rect x="10" y="100" width="8" height="8" fill="#000"/>
            <rect x="25" y="70" width="8" height="8" fill="#000"/>
            <rect x="25" y="100" width="8" height="8" fill="#000"/>
            <rect x="160" y="70" width="8" height="8" fill="#000"/>
            <rect x="160" y="85" width="8" height="8" fill="#000"/>
            <rect x="160" y="100" width="8" height="8" fill="#000"/>
            <rect x="145" y="70" width="8" height="8" fill="#000"/>
            <rect x="145" y="100" width="8" height="8" fill="#000"/>
            <rect x="70" y="155" width="8" height="8" fill="#000"/>
            <rect x="85" y="155" width="8" height="8" fill="#000"/>
            <rect x="100" y="155" width="8" height="8" fill="#000"/>
            <rect x="115" y="155" width="8" height="8" fill="#000"/>
            <rect x="130" y="155" width="8" height="8" fill="#000"/>
            <rect x="145" y="155" width="8" height="8" fill="#000"/>
          </svg>
        </div>

        {/* Placeholder verificación facial externa */}
        <div style={{
          width: '100%',
          border: '2px dashed #dadce0',
          borderRadius: '8px',
          padding: '20px 16px',
          textAlign: 'center',
          background: '#f8f9fa',
        }}>
          <p style={{ fontSize: '20px', marginBottom: '8px' }}>🤳</p>
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#5f6368', marginBottom: '4px' }}>
            Verificación facial
          </p>
          <p style={{ fontSize: '11px', color: '#80868b', lineHeight: 1.4 }}>
            El cliente completa la verificación de identidad en su dispositivo a través del enlace externo.
          </p>
          <span style={{
            display: 'inline-block', marginTop: '8px',
            background: '#fef7e0', color: '#b06000',
            border: '1px solid #f5d68a', borderRadius: '100px',
            fontSize: '11px', fontWeight: 600, padding: '3px 10px',
          }}>
            Servicio externo — no incluido en este flujo
          </span>
        </div>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
          <WomButton fullWidth onClick={handleValidar}>
            Validar en este dispositivo
          </WomButton>
          <button style={{
            background: 'none', border: 'none', color: '#9B00C4', fontSize: '13px',
            fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textAlign: 'center',
          }}>
            ¿Necesitas ayuda?
          </button>
        </div>

      </div>
    </MobileShell>
  )
}