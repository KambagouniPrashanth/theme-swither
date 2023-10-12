import React,{useState} from 'react'

import ColorContext from './ColorContext'

const ColorProvider=(props)=>{

    const[theme,setTheme]=useState({
        color:"white",
        backgroundColor:"black",
        border:"2px solid tomato"
        
    })

    const day={
        id:"day",
        color:"black",
        backgroundColor:"white",
        border:"2px solid blue"
        

    }
    return(
    <ColorContext.Provider value={
        {theme:theme,
        day:()=>setTheme(day),
        
        
        night:()=>setTheme({
        id:"night",
        color:"white",
        backgroundColor:"black",
        border:"2px solid tomato"

        })

    }}> 
       {props.children}
    </ColorContext.Provider>

    )

  

}

export default ColorProvider


