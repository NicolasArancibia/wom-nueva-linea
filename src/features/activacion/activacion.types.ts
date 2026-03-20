export interface Cliente {
  nombre: string
  rut: string
  telefono: string
  direccion: string
  email: string
}

export interface Plan {
  id: string
  nombre: string
  precio: number
  precioLuego: number
  meses: number
  descuento?: number
  recomendado?: boolean
  beneficios: string[]
}

export const PLANES_MOCK: Plan[] = [
  {
    id: 'plan-150gb',
    nombre: 'Plan 150 GB',
    precio: 10990,
    precioLuego: 12990,
    meses: 12,
    descuento: 20,
    recomendado: true,
    beneficios: ['150 GB datos', 'Minutos libres', 'App libre en Roaming'],
  },
  {
    id: 'plan-80gb',
    nombre: 'Plan 80 GB',
    precio: 8990,
    precioLuego: 10990,
    meses: 12,
    descuento: 10,
    recomendado: false,
    beneficios: ['80 GB datos', 'Minutos libres'],
  },
  {
    id: 'plan-40gb',
    nombre: 'Plan 40 GB',
    precio: 5990,
    precioLuego: 7990,
    meses: 12,
    recomendado: false,
    beneficios: ['40 GB datos'],
  },
]

export const STEPS = [
  { id: 1, label: '1.ID' },
  { id: 2, label: '2.Evaluación y planes' },
  { id: 3, label: '3.Ajustes' },
  { id: 4, label: '4.Check-out' },
  { id: 5, label: '5.Resumen' },
]