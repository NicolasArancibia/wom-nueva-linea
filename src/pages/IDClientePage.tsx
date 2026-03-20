import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileShell from '../components/layout/MobileShell'
import AppTopbar from '../components/layout/AppTopbar'
import StepBar from '../components/layout/StepBar'
import WomButton from '../components/ui/WomButton'
import WomCard from '../components/ui/WomCard'
import { useActivacionStore } from '../store/activacionStore'

const lineasContratadas = [
  { linea: '+569 8765 4321', plan: 'Plan gigas libres', precio: 18990 },
  { linea: '+569 1234 5678', plan: 'Plan gigas libres', precio: 18990 },
]

const fmt = (n: number) =>
  n.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })

export default function IDClientePage() {
  const navigate = useNavigate()
  const cliente = useActivacionStore((s) => s.cliente)
  const setStep = useActivacionStore((s) => s.setStep)
  const [tabActivo, setTabActivo] = useState<'movil' | 'fibra'>('movil')
  const [detalleVisible, setDetalleVisible] = useState(false)

  function handleIrAMovil() {
    setStep(2)
    navigate('/evaluacion-planes')
  }

  if (!cliente) return null

  return (
    <MobileShell>
      <AppTopbar title="ID" />
      <StepBar currentStep={1} />

      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* Detalle cliente */}
        <div>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#80868b', marginBottom: '8px' }}>
            Detalle cliente
          </p>
          <WomCard>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: '14px', color: '#202124' }}>{cliente.nombre}</p>
                <p style={{ fontSize: '13px', color: '#5f6368' }}>{cliente.rut}</p>
                <p style={{ fontSize: '13px', color: '#5f6368', marginTop: '4px' }}>Teléfono</p>
                <p style={{ fontSize: '13px', color: '#5f6368' }}>{cliente.telefono}</p>
              </div>
              <button style={{
                background: 'none', border: '1px solid #dadce0', borderRadius: '4px',
                padding: '4px 8px', cursor: 'pointer', fontSize: '16px', color: '#9B00C4',
              }}>✎</button>
            </div>
          </WomCard>
        </div>

        {/* Ventas disponibles */}
        <div>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#80868b', marginBottom: '8px' }}>
            Ventas disponibles
          </p>
          <WomCard padding="0">
            {/* Venta móvil */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 16px', borderBottom: '1px solid #e8eaed',
            }}>
              <div>
                <p style={{ fontWeight: 600, fontSize: '13px', color: '#202124' }}>📱 Venta móvil</p>
                <p style={{ fontSize: '11px', color: '#80868b' }}>Descripción breve de lo que puede hacer.</p>
              </div>
              <WomButton onClick={handleIrAMovil}>Ir a móvil</WomButton>
            </div>
            {/* Venta fibra */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 16px',
            }}>
              <div>
                <p style={{ fontWeight: 600, fontSize: '13px', color: '#202124' }}>📡 Venta fibra</p>
                <p style={{ fontSize: '11px', color: '#80868b' }}>Descripción breve de lo que puede hacer.</p>
              </div>
              <WomButton variant="secondary">Ir a fibra</WomButton>
            </div>
          </WomCard>
        </div>

        {/* Servicios contratados */}
        <div>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#80868b', marginBottom: '8px' }}>
            Servicios contratados
          </p>

          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '2px solid #e8eaed', marginBottom: '12px' }}>
            {(['movil', 'fibra'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setTabActivo(tab)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '8px 12px', fontSize: '13px', fontWeight: 600,
                  color: tabActivo === tab ? '#9B00C4' : '#80868b',
                  borderBottom: tabActivo === tab ? '2px solid #9B00C4' : '2px solid transparent',
                  marginBottom: '-2px',
                }}
              >
                {tab === 'movil' ? 'Contratados móvil' : 'Contratados fibra'}
              </button>
            ))}
          </div>

          {tabActivo === 'movil' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {lineasContratadas.map((l) => (
                <WomCard key={l.linea}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <p style={{ fontSize: '11px', color: '#80868b' }}>Línea: {l.linea}</p>
                      <p style={{ fontSize: '13px', fontWeight: 600, color: '#202124' }}>📱 {l.plan}</p>
                      <p style={{ fontSize: '13px', color: '#202124' }}>{fmt(l.precio)} al mes</p>
                    </div>
                    <button
                      onClick={() => setDetalleVisible(true)}
                      style={{
                        background: 'none', border: '1px solid #dadce0', borderRadius: '4px',
                        padding: '6px 12px', cursor: 'pointer', fontSize: '12px',
                        color: '#9B00C4', fontWeight: 600,
                      }}
                    >
                      Ver detalle
                    </button>
                  </div>
                </WomCard>
              ))}
            </div>
          )}

          {tabActivo === 'fibra' && (
            <p style={{ fontSize: '13px', color: '#80868b', textAlign: 'center', padding: '16px' }}>
              No hay servicios de fibra contratados.
            </p>
          )}
        </div>

        <button style={{
          background: 'none', border: 'none', color: '#9B00C4', fontSize: '13px',
          fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textAlign: 'center',
        }}>
          Ver todos los productos contratados
        </button>

        <button style={{
          background: 'none', border: 'none', color: '#9B00C4', fontSize: '13px',
          fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textAlign: 'center',
        }}>
          Cancelar venta
        </button>
      </div>

      {/* Modal detalle plan */}
      {detalleVisible && (
        <div style={{
          position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
          paddingTop: '80px', zIndex: 50,
        }}>
          <div style={{
            background: '#fff', borderRadius: '8px', padding: '20px',
            width: '320px', position: 'relative',
          }}>
            <button
              onClick={() => setDetalleVisible(false)}
              style={{
                position: 'absolute', top: '12px', right: '12px',
                background: 'none', border: 'none', fontSize: '18px',
                cursor: 'pointer', color: '#5f6368',
              }}
            >✕</button>
            <p style={{ fontWeight: 700, fontSize: '16px', color: '#202124' }}>Plan gigas libres</p>
            <p style={{ fontSize: '13px', color: '#9B00C4', marginBottom: '4px' }}>$18.990 al mes</p>
            <p style={{ fontSize: '11px', color: '#80868b', marginBottom: '12px' }}>
              Por 12 meses, luego $21.990 · Línea: +560 0000 0000
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
              {['Beneficios exclusivos', 'Gigas libres', 'Minutos libres', 'App libre en Roaming'].map((b) => (
                <p key={b} style={{ fontSize: '12px', color: '#3c4043' }}>✅ {b}</p>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <WomButton fullWidth onClick={() => setDetalleVisible(false)}>Ir a migración</WomButton>
              <WomButton variant="secondary" fullWidth onClick={() => setDetalleVisible(false)}>Cambio de plan</WomButton>
            </div>
          </div>
        </div>
      )}
    </MobileShell>
  )
}