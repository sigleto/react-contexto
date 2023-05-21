import React, { useContext } from "react";
import Contexto from './contexto/Contexto'
function Colores(){
    const {setColor}=useContext(Contexto)
    
    const colores=['red','green','yellow','magenta','gold','blue','brown']
    const alea=Math.floor(Math.random()*colores.length)
    const cambio=(colores[alea])
    
        return(
        <div>
        <button onClick={()=>setColor(cambio)}>CAMBIO</button>
        </div>
    )
    
}
export default Colores