import { Routes, Route } from 'react-router-dom'
import { Home, Datos, Buscar, MiPerfil } from './pages'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='datos' element={<Datos />} />
      <Route path='buscar' element={<Buscar />} />
      <Route path='mi-perfil' element={<MiPerfil />} />
    </Routes>
  )
}
