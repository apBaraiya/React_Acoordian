import React, { useState } from "react";

const Myacoordian = ({qustion, answers}) => {

    const [show,setshow] = useState(false);
    
    return (
        <>
            <div className="center">
                <p onClick={()=> setshow(!show)}>{show? "➖" : "➕"}</p>
                <h3>{qustion}</h3>
            </div>
            {show && <p className="answares">{answers}</p>}
            
        </>
    )
}
export default Myacoordian