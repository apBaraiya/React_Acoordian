import React, { useState } from 'react'
import Myacoordian from './MyacoordianApp/Myacoordian';
import { Questions } from './MyacoordianApp/Questions';
import "./App.css"

const App = () => {
    const [Data] = useState(Questions);
    return <>
        <section className="main">
            <h1>React Interview Questions</h1>
            {
                Data.map((curEle) => {
                    return <Myacoordian key={curEle.id} {...curEle} />
                })
            }
        </section>
    </>
}

export default App