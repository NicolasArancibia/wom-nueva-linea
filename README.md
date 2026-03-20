# WOM — Prototipo Activación Nueva Línea

Prototipo navegable del flujo de activación de nueva línea móvil para ejecutivos WOM.
Construido con React + Vite + TypeScript siguiendo el design system de OutSystems y la identidad de marca WOM.

---

## Stack

| Tecnología | Uso |
|---|---|
| React 18 + TypeScript | UI y lógica de componentes |
| Vite 5 | Bundler y dev server |
| React Router DOM 6 | Navegación entre pantallas |
| Zustand | Estado global del flujo de activación |
| OutSystems UI Design System | Tokens de diseño (espaciado, sombras, tipografía, radios) |
| Marca WOM | Colores, identidad visual |

---

## Requisitos

- Node.js 18 o superior
- npm 9 o superior
- Git Bash (recomendado en Windows)

---

## Instalación y uso
```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/wom-nueva-linea.git
cd wom-nueva-linea

# 2. Instalar dependencias
npm install

# 3. Correr en desarrollo
npm run dev
# Abre http://localhost:5173
```

---

## Estructura del proyecto
```
wom-nueva-linea/
└── src/
    ├── components/
    │   ├── ui/
    │   │   ├── WomButton.tsx        ← Botón con variantes primary / secondary / ghost
    │   │   ├── WomInput.tsx         ← Input con label, hint y error
    │   │   ├── WomCard.tsx          ← Contenedor card con sombra y borde
    │   │   ├── PlanCard.tsx         ← Card de plan del catálogo con badge recomendado
    │   │   └── OutSystemsUIKit.jsx  ← UI Kit completo OutSystems (referencia)
    │   └── layout/
    │       ├── MobileShell.tsx      ← Wrapper que simula el frame del celular
    │       ├── AppTopbar.tsx        ← Barra superior con título, botón atrás y menú
    │       └── StepBar.tsx          ← Barra de progreso del flujo (5 pasos)
    ├── features/
    │   └── activacion/
    │       ├── activacion.types.ts  ← Interfaces, tipos y datos mock (PLANES_MOCK, STEPS)
    │       └── hooks/
    │           └── useActivacion.ts ← Hook para acceder al store de activación
    ├── pages/
    │   ├── LoginPage.tsx            ← Paso 0: Login ejecutivo
    │   ├── HomePage.tsx             ← Paso 0: Buscador de cliente por RUT o teléfono
    │   ├── IDClientePage.tsx        ← Paso 1: Vista 360 del cliente, ventas disponibles
    │   ├── EvaluacionPlanesPage.tsx ← Paso 2: Evaluación crediticia + catálogo de planes
    │   ├── AjustesCarritoPage.tsx   ← Paso 3: Configuración SIM, portabilidad, bloqueo 809
    │   ├── ValidacionIdentidadPage.tsx ← Paso 3: Selección vía validación (QR o ejecutivo)
    │   ├── ValidacionQRPage.tsx     ← Paso 3: QR para el cliente + placeholder face ID
    │   ├── CheckoutPage.tsx         ← Paso 4: Resumen completo antes de confirmar
    │   └── ConfirmacionPage.tsx     ← Paso 5: Modal de venta finalizada con éxito
    ├── routes/
    │   └── AppRouter.tsx            ← Todas las rutas del flujo conectadas
    ├── store/
    │   ├── activacionStore.ts       ← Estado global del flujo (Zustand)
    │   ├── authStore.ts             ← Estado de sesión del ejecutivo
    │   └── uiStore.ts               ← Estado de UI (tema, sidebar)
    ├── styles/
    │   ├── variables.css            ← Tokens WOM × OutSystems (colores, espaciado, radios)
    │   └── globals.css              ← Reset global + estilos base
    ├── services/
    │   ├── firebase/                ← Configuración Firebase (comentada, lista para activar)
    │   └── supabase/                ← Configuración Supabase (comentada, lista para activar)
    ├── hooks/
    │   ├── useLocalStorage.ts       ← Hook genérico para localStorage
    │   └── useMediaQuery.ts         ← Hook para breakpoints responsivos
    ├── types/
    │   └── index.d.ts               ← Interfaces globales (User, ApiResponse, Theme)
    ├── utils/
    │   ├── formatDate.ts            ← Formateo de fechas en español
    │   └── validators.ts            ← Validadores de email, contraseña, campos vacíos
    ├── config/
    │   ├── constants.ts             ← Constantes globales (APP_NAME, APP_VERSION)
    │   └── env.ts                   ← Variables de entorno tipadas
    ├── App.tsx                      ← Entrada principal, carga estilos y router
    └── main.tsx                     ← Punto de entrada React
```

---

## Flujo de la aplicación
```
Login
  │
  ▼
Home — Buscador de cliente (RUT o teléfono)
  │
  ▼
1. ID Cliente
   ├── Vista 360: datos del cliente
   ├── Ventas disponibles: móvil / fibra
   └── Servicios contratados (tabs móvil / fibra)
  │
  ▼
2. Evaluación y Planes
   ├── Evaluación crediticia (botón Evaluar → aprueba $50.000)
   └── Catálogo de planes (tabs Portabilidad / Línea nueva)
       └── Agregar plan al carrito → FAB carrito aparece
  │
  ▼
3. Ajustes / Carrito
   ├── Resumen plan seleccionado
   ├── Con portabilidad (checkbox)
   ├── Tipo SIM: física o digital
   ├── Escanear código / código simcard manual
   └── Activar bloqueo 809
  │
  ▼
3. Validación de Identidad
   ├── Vía cliente → genera QR para escanear
   └── Vía ejecutivo → valida en el mismo dispositivo
  │
  ▼
3. QR
   ├── Código QR simulado para que el cliente escanee
   └── [Placeholder] Verificación facial — servicio externo de tercero
  │
  ▼
4. Check-out / Resumen
   ├── Detalle del plan comprado
   ├── Detalles del servicio (N° orden, tipo venta, líneas)
   ├── Datos del cliente
   ├── Fecha de instalación
   └── Cobros (mensual + adicionales + total)
  │
  ▼
5. Confirmación
   └── Modal: venta finalizada + ID de orden + volver al home
```

---

## Identidad visual WOM

| Token | Valor | Uso |
|---|---|---|
| `--color-primary` | `#9B00C4` | Botones, links, activos, barra de pasos |
| `--color-primary-dark` | `#7A009B` | Hover de botones |
| `--color-primary-light` | `#C44EF0` | Bordes de toast |
| `--color-primary-lightest` | `#F5E6FF` | Fondos suaves, toast background |
| `--color-accent` | `#E91E8C` | Badge del carrito, acentos magenta |
| `--color-stepper-done` | `#3d8f3d` | Pasos completados en la barra |

---

## Design System — OutSystems UI

Los componentes siguen los tokens y convenciones del **OutSystems UI Framework v2.26.0**:

- **Botones:** `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`
- **Inputs:** con label, hint, estado error
- **Cards:** con sombra `shadow-s` y borde `neutral-3`
- **Tags / Badges:** para estados (evaluado, recomendado)
- **StepBar:** progreso visual del wizard de 5 pasos
- **Espaciado:** `--space-xs` (4px) → `--space-xl` (40px)
- **Radios:** `--radius-soft` (4px), `--radius-rounded` (100px)

El archivo `src/components/ui/OutSystemsUIKit.jsx` contiene el UI Kit completo como referencia visual y de componentes.

---

## Estado global — Zustand

El store `activacionStore` mantiene todo el estado del flujo:
```typescript
{
  step: number              // paso actual del wizard (1-5)
  cliente: ClienteData      // datos del cliente encontrado
  carrito: {
    plan: PlanData          // plan seleccionado
    simTipo: 'fisica' | 'digital'
    codigoSimcard: string
    conPortabilidad: boolean
    activarBloqueo809: boolean
    creditoEvaluado: number
  }
  ordenId: string           // ID generado al finalizar
}
```

---

## Nota sobre verificación facial

La sección de reconocimiento facial en el flujo de validación de identidad es provista por un **servicio externo de tercero**. En este prototipo se representa con un placeholder visual en la pantalla `ValidacionQRPage`. La integración real debe conectarse al enlace externo que devuelve al usuario a la app una vez completada la verificación.

---

## Conectar base de datos (opcional)

Los servicios están preparados pero comentados. Elige uno:

| | Firebase | Supabase |
|---|---|---|
| Tipo | NoSQL | SQL (PostgreSQL) |
| Archivo | `src/services/firebase/config.ts` | `src/services/supabase/config.ts` |
| Variables | `.env` → `VITE_FIREBASE_*` | `.env` → `VITE_SUPABASE_*` |

---

## Scripts disponibles
```bash
npm run dev      # Servidor de desarrollo en localhost:5173
npm run build    # Build de producción en /dist
npm run preview  # Preview del build de producción
npm run lint     # Linter TypeScript + ESLint
```

---

## Creado con

- [project-templates](https://github.com/NicolasArancibia/project-templates) — arquitectura base propia
- [OutSystems UI Framework](https://outsystemsui.outsystems.com) — design system
- [Vite](https://vitejs.dev) — build tool
- [Zustand](https://zustand-demo.pmnd.rs) — estado global