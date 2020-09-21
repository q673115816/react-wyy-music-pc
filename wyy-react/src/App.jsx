import React, { useState } from 'react'
import { Wrapper } from './App.component'
import simpleIcons from 'simple-icons'
import HeaderBar from './component/HeaderBar'
import FooterBar from './component/FooterBar'
import Main from './component/Main'
const App = () => {
    const [Width, setWidth] = useState(1100)
    const [Height, setHeight] = useState(700)
    return (
        <Wrapper style={{width: Width, height: Height}}>
            <HeaderBar></HeaderBar>
            <Main></Main>
            <FooterBar></FooterBar>
        </Wrapper>
    )
}
export default App