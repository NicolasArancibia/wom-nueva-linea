import { type Plan } from '../../features/activacion/activacion.types'
import WomButton from './WomButton'

interface Props {
  plan: Plan
  onAgregar: (plan: Plan) => void
  evaluado: boolean
}

const fmt = (n: number) =>
  n.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })

export default function PlanCard({ plan, onAgregar, evaluado }: Props) {
  return (
    <div style={{
      border: '1px solid #e8eaed',
      borderRadius: '4px',
      padding: '16px',
      background: '#fff',
      minWidth: '200px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      position: 'relative',
    }}>
      {plan.recomendado && (
        <span style={{
          position: 'absolute',
          top: '-10px',
          left: '12px',
          background: '#9B00C4',
          color: '#fff',
          fontSize: '10px',
          fontWeight: 700,
          padding: '2px 10px',
          borderRadius: '100px',
        }}>
          Recomendado
        </span>
      )}

      <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '2px', color: '#202124' }}>
        {plan.nombre}
      </div>
      <div style={{ fontSize: '20px', fontWeight: 700, color: '#202124' }}>
        {fmt(plan.precio)}
      </div>
      <div style={{ fontSize: '11px', color: '#80868b', marginBottom: '10px' }}>
        por {plan.meses} meses, luego {fmt(plan.precioLuego)}
      </div>

      {plan.descuento && (
        <div style={{
          background: '#F5E6FF',
          color: '#7A009B',
          borderRadius: '4px',
          textAlign: 'center',
          padding: '6px',
          fontWeight: 700,
          fontSize: '13px',
          marginBottom: '12px',
        }}>
          {plan.descuento}% de descuento
        </div>
      )}

      <div style={{ display: 'flex', gap: '8px' }}>
        <button style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #dadce0',
          borderRadius: '4px',
          background: '#fff',
          fontSize: '13px',
          cursor: 'pointer',
          color: '#5f6368',
        }}>
          Detalles
        </button>
        <WomButton
          onClick={() => evaluado && onAgregar(plan)}
          disabled={!evaluado}
        >
          Agregar 🛒
        </WomButton>
      </div>
    </div>
  )
}