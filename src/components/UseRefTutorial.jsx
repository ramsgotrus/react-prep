//useRef persiste the current, previous or feature data between render cycles. 

import React, { useRef } from 'react'

const UseRefTutorial = () => {

    const inputRef = useRef()
    const handleClick = () => {
        inputRef.current.focus()
    }

    
    return (<div>
        <h1>Ram</h1>
        <input ref={inputRef} type='text' placeholder='...Please enter name' />
        <button onClick={handleClick}>Change Name</button>
    </div>)
}

export default UseRefTutorial