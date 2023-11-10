//useforward: allow us to ref a dom element in child component from parent component.
//useImperativeHandle : allow us to handle a state in child component from parent component.

import React, { forwardRef, useImperativeHandle, useState } from 'react'

const UseImperativeTutorial = forwardRef((props, ref) => {
    const [toggleButton, setToggleButton] = useState(false)

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggleButton(!toggleButton)
        }
    }))

    return (<div>
        <button>{props.title}</button>
        {toggleButton ? <span>Toggle</span> : ''}
    </div>)
})

export default UseImperativeTutorial
