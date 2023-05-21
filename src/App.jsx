import { useState } from 'react'
import Pagina1 from './componentes/Pagina'
import './App.css'
import Provider from './contexto/Provider'
import Colores from './Colores'
function App() {
  

 
  return (
  <Provider>
    <div className="App">
     <Pagina1/>
    </div>
    <Colores/>
  </Provider>  
  )
}

export default App
