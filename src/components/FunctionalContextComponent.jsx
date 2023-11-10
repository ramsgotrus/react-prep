import React, { useContext } from 'react'
import { AppContext } from './UseContextTutorial'

const FunctionalContextComponent = () => {
    const { isDark, setIsDark } = useContext(AppContext)

    return (<div>
        <h1>FunctionalChange Color</h1>
        <button onClick={() => {
            setIsDark(!isDark)
        }}>Change Color</button>
    </div>)
}

export default FunctionalContextComponent