import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileShell from '../components/layout/MobileShell'
import AppTopbar from '../components/layout/AppTopbar'
import StepBar from '../components/layout/StepBar'
import WomButton from '../components/ui/WomButton'
import PlanCard from '../components/ui/PlanCard'
import { useActivacionStore } from '../store/activacionStore'
import { PLANES_MOCK, type Plan } from '../features/activacion/activacion.types'

export default function EvaluacionPlanesPage() {
  const navigate = useNavigate()
  const { setPlan, setCarrito, setStep } = useActivacionStore()
  const [evaluado, setEvaluado] = useState(false)
  const [creditoAprobado] = useState(50000)
  const [tabPlan, setTabPlan] = useState<'portabilidad' | 'nueva'>('nueva')
  const [toastVisible, setToastVisible] = useState(false)
  const [carritoCount, setCarritoCount] = useState(0)

  function handleEvaluar() {
    setEvaluado(true)
  }

  function handleAgregar(plan: Plan) {
    setPlan(plan)
    setCarrito({ creditoEvaluado: creditoAprobado })
    setCarritoCount((n) => n + 1)
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 2500)
  }

  function handleIrCarrito() {
    setStep(3)
    navigate('/ajustes-carrito')
  }

  return (
    <MobileShell>
      <AppTopbar title="ID" />
      <StepBar currentStep={2} />

      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>

        {toastVisible && (
          <div style={{
            position: 'absolute', top: '8px', left: '16px', right: '16px',
            background: '#F5E6FF', border: '1px solid #C44EF0',
            borderRadius: '4px', padding: '10px 14px',
            fontSize: '13px', fontWeight: 600, color: '#7A009B',
            zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          }}>
            Se agrego "Plan 150 GB" exitosamente al carrito.
          </div>
        )}

        <div>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#80868b', marginBottom: '10px' }}>
            Evaluacion cliente
          </p>
          <div style={{
            border: '1px solid #e8eaed', borderRadius: '4px', padding: '12px 16px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: '#fff',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '16px' }}>📋</span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#202124' }}>
                Evaluacion crediticia
              </span>
            </div>
            {!evaluado ? (
              <WomButton onClick={handleEvaluar}>Evaluar</WomButton>
            ) : (
              <span style={{
                background: '#e6f4ea', color: '#3d8f3d', border: '1px solid #a8d5a8',
                borderRadius: '100px', padding: '4px 12px', fontSize: '12px', fontWeight: 700,
              }}>
                {'\u2713'} ${creditoAprobado.toLocaleString('es-CL')}
              </span>
            )}
          </div>
        </div>

        <div>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#80868b', marginBottom: '10px' }}>
            Catalogo de planes
          </p>

          <div style={{ display: 'flex', borderBottom: '2px solid #e8eaed', marginBottom: '14px' }}>
            {(['portabilidad', 'nueva'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setTabPlan(tab)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '8px 12px', fontSize: '13px', fontWeight: 600,
                  color: tabPlan === tab ? '#9B00C4' : '#80868b',
                  borderBottom: tabPlan === tab ? '2px solid #9B00C4' : '2px solid transparent',
                  marginBottom: '-2px',
                }}
              >
                {tab === 'portabilidad' ? 'Portabilidad' : 'Linea nueva'}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
            {PLANES_MOCK.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onAgregar={handleAgregar}
                evaluado={evaluado}
              />
            ))}
          </div>

          {!evaluado && (
            <p style={{ fontSize: '11px', color: '#80868b', marginTop: '8px', textAlign: 'center' }}>
              Evalua al cliente para habilitar la opcion de agregar
            </p>
          )}
        </div>

        <button style={{
          background: 'none', border: 'none', color: '#9B00C4', fontSize: '13px',
          fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textAlign: 'center',
        }}>
          Ver todos los planes
        </button>

        <button style={{
          background: 'none', border: 'none', color: '#9B00C4', fontSize: '13px',
          fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textAlign: 'center',
        }}>
          Cancelar venta
        </button>
      </div>

      {carritoCount > 0 && (
        <button
          onClick={handleIrCarrito}
          style={{
            position: 'absolute', bottom: '24px', right: '20px',
            width: '52px', height: '52px', borderRadius: '50%',
            background: '#9B00C4', color: '#fff', border: 'none',
            fontSize: '22px', cursor: 'pointer', boxShadow: '0 4px 16px rgba(155,0,196,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {'🛒'}
          <span style={{
            position: 'absolute', top: '-4px', right: '-4px',
            background: '#E91E8C', color: '#fff', borderRadius: '50%',
            width: '20px', height: '20px', fontSize: '11px', fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {carritoCount}
          </span>
        </button>
      )}
    </MobileShell>
  )
}