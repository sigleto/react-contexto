import React, {useState,useContext} from "react";
import Contexto from '../contexto/Contexto'


function Aficiones({valor}){
const {persona}=useContext(Contexto)
const {color}=useContext(Contexto)
    return(
        <>
        <div className='aficiones' style={{backgroundColor:color}}>{persona[valor].Aficiones}</div>
        
        </>
    )
}

export default Aficiones