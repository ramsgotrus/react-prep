import React, { useRef, useState } from 'react'
import { AppContext } from './UseContextTutorial'
import { FunctionalContextComponent, ClassContextComponent } from './index'

///import { UseImperativeTutorial } from './index' /// Test use Ref and useImperative
// const TestComponent = () => { 
//     const refButton = useRef(null)
//     const handleClick = () => {
//         refButton.current.alterToggle()
//     }
//     return (<div >
//         <button onClick={handleClick}>Parent Component</button>
//         <UseImperativeTutorial title='Child Component' ref={refButton} />
//     </div>
//     )
// }

const TestComponent = () => {
    const [isDark, setIsDark] = useState(false)
    const themeStyle = (isDark) => {
        return {
            backgroundColor: isDark ? '#CCC' : '#333',
            padding: '2rem',
            color: isDark ? '#333' : '#CCC'
        }
    }

    return (
        <AppContext.Provider value={{ isDark, setIsDark }}>
            <div style={themeStyle(isDark)}>
               <FunctionalContextComponent/>
               <ClassContextComponent/>
            </div>
        </AppContext.Provider>
    )
}

export default TestComponent
