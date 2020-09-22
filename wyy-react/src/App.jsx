import React, { useState } from 'react'
import './App.css'

import HeaderBar from './component/HeaderBar'
import FooterBar from './component/FooterBar'
import Main from './component/Main'
const App = () => {
    const [Width, setWidth] = useState(1100)
    const [Height, setHeight] = useState(700)
    return (
        <div id="wrapper" style={{width: Width, height: Height}}>
            <HeaderBar></HeaderBar>
            <Main></Main>
            <FooterBar></FooterBar>
        </div>
    )
}
export default App