import { useNavigate } from 'react-router-dom'
import MobileShell from '../components/layout/MobileShell'
import AppTopbar from '../components/layout/AppTopbar'
import StepBar from '../components/layout/StepBar'
import WomButton from '../components/ui/WomButton'
import WomCard from '../components/ui/WomCard'
import { useActivacionStore } from '../store/activacionStore'

const fmt = (n: number) =>
  n.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })

export default function CheckoutPage() {
  const navigate = useNavigate()
  const { carrito, cliente, setOrdenId, setStep } = useActivacionStore()
  const plan = carrito.plan

  function handleFinalizar() {
    setOrdenId('xxxxxxxx')
    setStep(5)
    navigate('/confirmacion')
  }

  if (!plan || !cliente) return null

  const costoMensual = plan.precio
  const costosAdicionales = 0
  const total = costoMensual + costosAdicionales

  return (
    <MobileShell>
      <AppTopbar title="Check-out" />
      <StepBar currentStep={4} />

      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div style={{ textAlign: 'center', padding: '8px 0' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: '#f1f3f4', display: 'flex', alignItems: 'center',
            justifyContent: 'center', margin: '0 auto 8px', fontSize: '22px',
          }}>
            📋
          </div>
          <p style={{ fontSize: '18px', fontWeight: 700, color: '#202124' }}>¿Todo listo?</p>
          <p style={{ fontSize: '13px', color: '#80868b' }}>Valida que todos los datos sean correctos</p>
        </div>

        <div>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#80868b', marginBottom: '8px' }}>
            Detalle compra
          </p>
          <WomCard>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{
                width: '40px', height: '40px', background: '#f1f3f4',
                borderRadius: '4px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '18px', flexShrink: 0,
              }}>
                📱
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '14px', color: '#202124' }}>{plan.nombre}</p>
                <p style={{ fontSize: '16px', fontWeight: 700, color: '#202124' }}>{fmt(plan.precio)}</p>
                <p style={{ fontSize: '11px', color: '#80868b' }}>
                  por {plan.meses} meses, luego {fmt(plan.precioLuego)}
                </p>
              </div>
            </div>
          </WomCard>
        </div>

        <div>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#80868b', marginBottom: '8px' }}>
            Detalles servicios
          </p>
          <WomCard padding="0">
            {[
              { label: 'N\u00b0 de orden', value: 'xxxxxxxxxxxxxxx' },
              { label: 'Tipo de venta', value: 'Venta' },
              { label: 'L\u00edneas a portar', value: '1' },
            ].map((row, i, arr) => (
              <div key={row.label} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '10px 14px',
                borderBottom: i < arr.length - 1 ? '1px solid #e8eaed' : 'none',
              }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#3c4043' }}>{row.label}</span>
                <span style={{ fontSize: '13px', color: '#5f6368' }}>{row.value}</span>
              </div>
            ))}
          </WomCard>
        </div>

        <div>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#80868b', marginBottom: '8px' }}>
            Datos cliente m\u00f3vil
          </p>
          <WomCard padding="0">
            {[
              { label: 'Nombre', value: cliente.nombre },
              { label: 'Rut', value: cliente.rut },
              { label: 'Tel\u00e9fono', value: cliente.telefono },
              { label: 'Direcci\u00f3n', value: cliente.direccion },
              { label: 'Email', value: cliente.email },
            ].map((row, i, arr) => (
              <div key={row.label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                padding: '10px 14px',
                borderBottom: i < arr.length - 1 ? '1px solid #e8eaed' : 'none',
              }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#3c4043', flexShrink: 0, marginRight: '12px' }}>
                  {row.label}
                </span>
                <span style={{ fontSize: '13px', color: '#5f6368', textAlign: 'right' }}>{row.value}</span>
              </div>
            ))}
          </WomCard>
        </div>

        <div>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#80868b', marginBottom: '8px' }}>
            Instalaci\u00f3n
          </p>
          <WomCard padding="0">
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#3c4043' }}>Fecha de instalaci\u00f3n</span>
              <span style={{ fontSize: '13px', color: '#5f6368' }}>00/00/00</span>
            </div>
          </WomCard>
        </div>

        <div>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#80868b', marginBottom: '8px' }}>
            Cobros
          </p>
          <WomCard padding="0">
            <div style={{ padding: '10px 14px', borderBottom: '1px solid #e8eaed' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', color: '#3c4043' }}>Costo mensual</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#202124' }}>{fmt(costoMensual)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '13px', color: '#3c4043' }}>Costos adicionales</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#202124' }}>{fmt(costosAdicionales)}</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#202124' }}>Total a pagar:</span>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#9B00C4' }}>{fmt(total)}</span>
            </div>
          </WomCard>
        </div>

        <WomButton fullWidth onClick={handleFinalizar}>
          Finalizar venta
        </WomButton>
        <WomButton variant="secondary" fullWidth onClick={() => navigate(-1)}>
          Cancelar venta
        </WomButton>

        <div style={{ height: '16px' }} />
      </div>
    </MobileShell>
  )
}