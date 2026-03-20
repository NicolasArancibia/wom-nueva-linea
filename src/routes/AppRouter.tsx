import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import IDClientePage from '../pages/IDClientePage'
import EvaluacionPlanesPage from '../pages/EvaluacionPlanesPage'
import AjustesCarritoPage from '../pages/AjustesCarritoPage'
import ValidacionIdentidadPage from '../pages/ValidacionIdentidadPage'
import ValidacionQRPage from '../pages/ValidacionQRPage'
import CheckoutPage from '../pages/CheckoutPage'
import ConfirmacionPage from '../pages/ConfirmacionPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                    element={<LoginPage />} />
        <Route path="/home"                element={<HomePage />} />
        <Route path="/id-cliente"          element={<IDClientePage />} />
        <Route path="/evaluacion-planes"   element={<EvaluacionPlanesPage />} />
        <Route path="/ajustes-carrito"     element={<AjustesCarritoPage />} />
        <Route path="/validacion-identidad" element={<ValidacionIdentidadPage />} />
        <Route path="/validacion-qr"       element={<ValidacionQRPage />} />
        <Route path="/checkout"            element={<CheckoutPage />} />
        <Route path="/confirmacion"        element={<ConfirmacionPage />} />
        <Route path="*"                    element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}