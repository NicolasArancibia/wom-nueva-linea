import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileShell from '../components/layout/MobileShell'
import AppTopbar from '../components/layout/AppTopbar'
import StepBar from '../components/layout/StepBar'
import WomButton from '../components/ui/WomButton'
import WomCard from '../components/ui/WomCard'
import WomInput from '../components/ui/WomInput'
import { useActivacionStore } from '../store/activacionStore'

const fmt = (n: number) =>
  n.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })

export default function AjustesCarritoPage() {
  const navigate = useNavigate()
  const { carrito, setCarrito, setStep } = useActivacionStore()
  const plan = carrito.plan

  const [simTipo, setSimTipo] = useState<'fisica' | 'digital'>(carrito.simTipo)
  const [codigoSim, setCodigoSim] = useState(carrito.codigoSimcard)
  const [portabilidad, setPortabilidad] = useState(carrito.conPortabilidad)
  const [bloqueo809, setBloqueo809] = useState(carrito.activarBloqueo809)
  const [simConfigurada, setSimConfigurada] = useState(false)

  function handleContinuar() {
    setCarrito({ simTipo, codigoSimcard: codigoSim, conPortabilidad: portabilidad, activarBloqueo809: bloqueo809 })
    setStep(3)
    navigate('/validacion-identidad')
  }

  if (!plan) return null

  return (
    <MobileShell>
      <AppTopbar title="Evaluacion y planes" />
      <StepBar currentStep={3} />

      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <p style={{ fontSize: '14px', fontWeight: 700, color: '#202124' }}>
          Carrito de compras
        </p>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          border: '1px solid #e8eaed', borderRadius: '4px', padding: '10px 14px',
          background: '#fff',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📋</span>
            <span style={{ fontSize: '13px', fontWeight: 600 }}>Evaluacion crediticia</span>
          </div>
          <span style={{
            background: '#e6f4ea', color: '#3d8f3d', border: '1px solid #a8d5a8',
            borderRadius: '100px', padding: '4px 10px', fontSize: '12px', fontWeight: 700,
          }}>
            {'\u2713'} ${(carrito.creditoEvaluado ?? 0).toLocaleString('es-CL')}
          </span>
        </div>

        <WomCard>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <div>
              <p style={{ fontWeight: 700, fontSize: '15px', color: '#202124' }}>{plan.nombre}</p>
              <p style={{ fontSize: '20px', fontWeight: 700, color: '#202124' }}>{fmt(plan.precio)}</p>
              <p style={{ fontSize: '11px', color: '#80868b' }}>
                por {plan.meses} meses, luego {fmt(plan.precioLuego)}
              </p>
            </div>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#d93025' }}>
              🗑
            </button>
          </div>

          <label style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '13px', color: '#3c4043', marginBottom: '12px', cursor: 'pointer',
          }}>
            <input
              type="checkbox"
              checked={portabilidad}
              onChange={(e) => setPortabilidad(e.target.checked)}
              style={{ accentColor: '#9B00C4' }}
            />
            Con portabilidad
          </label>

          <p style={{ fontSize: '12px', fontWeight: 600, color: '#3c4043', marginBottom: '8px' }}>
            Seleccionar sim
          </p>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '12px' }}>
            {(['fisica', 'digital'] as const).map((tipo) => (
              <label key={tipo} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                fontSize: '13px', cursor: 'pointer', color: '#3c4043',
              }}>
                <input
                  type="radio"
                  name="simTipo"
                  checked={simTipo === tipo}
                  onChange={() => setSimTipo(tipo)}
                  style={{ accentColor: '#9B00C4' }}
                />
                {tipo === 'fisica' ? 'Sim fisica' : 'Sim digital'}
              </label>
            ))}
          </div>

          <WomButton variant="secondary" fullWidth onClick={() => setSimConfigurada(true)}>
            Escanear codigo
          </WomButton>

          {simConfigurada && (
            <p style={{ fontSize: '11px', color: '#3d8f3d', marginTop: '6px', fontWeight: 600 }}>
              Sim configurada correctamente
            </p>
          )}

          <div style={{ marginTop: '12px' }}>
            <WomInput
              label="codigo simcard"
              placeholder="1234568798089"
              value={codigoSim}
              onChange={setCodigoSim}
            />
          </div>

          <label style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '13px', color: '#3c4043', marginTop: '12px', cursor: 'pointer',
          }}>
            <input
              type="checkbox"
              checked={bloqueo809}
              onChange={(e) => setBloqueo809(e.target.checked)}
              style={{ accentColor: '#9B00C4' }}
            />
            Activar bloqueo 809
          </label>
        </WomCard>

        <WomButton fullWidth onClick={handleContinuar}>
          Continuar
        </WomButton>

        <button style={{
          background: 'none', border: 'none', color: '#9B00C4', fontSize: '13px',
          fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textAlign: 'center',
        }}>
          Agregar mas planes
        </button>

        <button style={{
          background: 'none', border: 'none', color: '#9B00C4', fontSize: '13px',
          fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textAlign: 'center',
        }}>
          Cancelar venta
        </button>

      </div>
    </MobileShell>
  )
}