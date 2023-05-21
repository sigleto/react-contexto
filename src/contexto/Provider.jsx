
import { useState } from 'react'
import Contexto from './Contexto'

const relacion=[{Nombre:"Juan",Edad:45, Aficiones:['pesca ',' futbol']},
{Nombre:"Pepe",Edad:60,Aficiones:['baloncesto ',' cagar']},
{Nombre:"Luis",Edad:91,Aficiones:['papiroflexia ',' felicidad']},{indice:0}]

const Provider=function ({children}){

    const [persona,setPersona]=useState(relacion)
    const [color,setColor]=useState('orange')

    return(
        <Contexto.Provider value={{persona,setPersona,color,setColor}}>
            {children}
        </Contexto.Provider>
       
    )
}
export default Provider