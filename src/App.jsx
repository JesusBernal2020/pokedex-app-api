import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonId from './pages/PokemonId'
import ProtecterRoutes from './components/auth/ProtecterRoutes'

function App() {

  return (
    <section className='font-["Inter"] min-h-screen text-black'>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route element={<ProtecterRoutes/>}>

          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:pokemonName' element={<PokemonId />} />

        </Route>

      </Routes>
    </section>
  )
}

export default App
