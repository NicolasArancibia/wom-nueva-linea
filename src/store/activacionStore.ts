import { create } from 'zustand'

interface ClienteData {
  nombre: string
  rut: string
  telefono: string
  direccion: string
  email: string
}

interface PlanData {
  id: string
  nombre: string
  precio: number
  precioLuego: number
  meses: number
  descuento?: number
}

interface CarritoData {
  plan: PlanData | null
  simTipo: 'fisica' | 'digital'
  codigoSimcard: string
  conPortabilidad: boolean
  activarBloqueo809: boolean
  creditoEvaluado: number | null
}

interface ActivacionState {
  step: number
  cliente: ClienteData | null
  carrito: CarritoData
  ordenId: string
  setStep: (step: number) => void
  setCliente: (cliente: ClienteData) => void
  setPlan: (plan: PlanData) => void
  setCarrito: (data: Partial<CarritoData>) => void
  setOrdenId: (id: string) => void
  reset: () => void
}

const carritoInicial: CarritoData = {
  plan: null,
  simTipo: 'fisica',
  codigoSimcard: '',
  conPortabilidad: false,
  activarBloqueo809: false,
  creditoEvaluado: null,
}

export const useActivacionStore = create<ActivacionState>((set) => ({
  step: 0,
  cliente: null,
  carrito: carritoInicial,
  ordenId: '',
  setStep: (step) => set({ step }),
  setCliente: (cliente) => set({ cliente }),
  setPlan: (plan) => set((s) => ({ carrito: { ...s.carrito, plan } })),
  setCarrito: (data) => set((s) => ({ carrito: { ...s.carrito, ...data } })),
  setOrdenId: (ordenId) => set({ ordenId }),
  reset: () => set({ step: 0, cliente: null, carrito: carritoInicial, ordenId: '' }),
}))