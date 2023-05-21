import React,{useState,useContext} from "react";
import Contexto from '../contexto/Contexto'
import Aficiones from './Aficiones'

function Pagina1(){

const {persona}=useContext(Contexto)

const [valor,setValor]=useState(0)
const cambio=(e)=>{
setValor(e.target.value)
}

return (
    <>
    <input type="number" value={valor} onChange={cambio} min='0' max='2'/>
    <div>{persona[valor].Nombre}</div>
    <Aficiones valor={valor}/>
    </>
)

}
export default Pagina1