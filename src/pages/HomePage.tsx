import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileShell from '../components/layout/MobileShell'
import AppTopbar from '../components/layout/AppTopbar'
import WomButton from '../components/ui/WomButton'
import WomInput from '../components/ui/WomInput'
import { useActivacionStore } from '../store/activacionStore'

export default function HomePage() {
  const navigate = useNavigate()
  const setCliente = useActivacionStore((s) => s.setCliente)
  const [buscarPor, setBuscarPor] = useState<'rut' | 'telefono'>('rut')
  const [valor, setValor] = useState('')

  function handleBuscar() {
    // Simulamos encontrar el cliente
    setCliente({
      nombre: 'María Fernández Rojas',
      rut: '16.747.665-1',
      telefono: '+56979659535',
      direccion: 'Av siempre viva 1234, comuna, región',
      email: 'Tunombre@mail.com',
    })
    navigate('/id-cliente')
  }

  return (
    <MobileShell>
      <AppTopbar title="Hola, Nombre ejecutivo" showBack={false} />

      <div style={{ padding: '24px 16px', flex: 1 }}>
        <p style={{ fontSize: '15px', color: '#3c4043', marginBottom: '20px', fontWeight: 500 }}>
          Valida el RUT para determinar si es cliente
        </p>

        {/* Selector buscar por */}
        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#3c4043', marginBottom: '8px' }}>
            Buscar por
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {(['rut', 'telefono'] as const).map((op) => (
              <label key={op} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                fontSize: '14px', cursor: 'pointer', color: '#3c4043',
              }}>
                <input
                  type="radio"
                  name="buscarPor"
                  checked={buscarPor === op}
                  onChange={() => setBuscarPor(op)}
                  style={{ accentColor: '#9B00C4' }}
                />
                {op === 'rut' ? 'Rut' : 'Teléfono'}
              </label>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <WomInput
            placeholder={buscarPor === 'rut' ? '21896014-6' : '+56912345678'}
            value={valor}
            onChange={setValor}
          />
        </div>

        <WomButton fullWidth onClick={handleBuscar} disabled={valor.length < 3}>
          Buscar
        </WomButton>
      </div>
    </MobileShell>
  )
}