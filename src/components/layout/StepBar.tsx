import { STEPS } from '../../features/activacion/activacion.types'

interface Props {
  currentStep: number // 1 a 5
}

export default function StepBar({ currentStep }: Props) {
  return (
    <div style={{ padding: '10px 16px 0', background: '#fff' }}>
      {/* Barra de progreso */}
      <div style={{
        height: '6px',
        background: '#e8eaed',
        borderRadius: '100px',
        marginBottom: '6px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${(currentStep / STEPS.length) * 100}%`,
          background: '#3d8f3d',
          borderRadius: '100px',
          transition: 'width 0.3s ease',
        }} />
      </div>

      {/* Labels de pasos */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '8px',
      }}>
        {STEPS.map((step) => (
          <span
            key={step.id}
            style={{
              fontSize: '9px',
              fontWeight: step.id === currentStep ? 700 : 400,
              color: step.id < currentStep
                ? '#3d8f3d'
                : step.id === currentStep
                  ? '#9B00C4'
                  : '#bdc1c6',
              textAlign: 'center',
              maxWidth: '60px',
              lineHeight: 1.2,
            }}
          >
            {step.label}
          </span>
        ))}
      </div>
    </div>
  )
}