import react,{useContext} from 'react'

import ColorContext from '../context/ColorContext'
import { LiaBrushSolid } from "react-icons/lia";
/*module imported from
npm i react-icons */

const Disign1=()=>{

    const{theme,day,night}=useContext(ColorContext)

    function toggle(){
        // theme.id==="day"?day():night()
        theme.id==="day"?night():day()

    }



    return(
    <div style={{
        color:theme.color,
        backgroundColor:theme.backgroundColor,
        border:theme.border
    }}>
        <h1>Kambagouni Prashanth</h1>
        <h1>MCA:2022</h1>
        <h1>Degree:2020</h1>
        <button onClick={toggle}>Toggle <LiaBrushSolid/></button>





    </div>)

}

export default Disign1;