import React, { useState } from 'react'

//useState that allow to add a state to functional components. It returns an array with two values a current state and a function to update the state.
const UseStateTutorial = () => {
    const [counter, setCounter] = useState('Pedro')

    const handleChange = (event) => {
        const newValue = event.target.value
        setCounter(newValue)
    }

    return (<dv>
        {counter}
        <input placeholder='type something...' value={counter} onChange={handleChange} />
    </dv>)
}

export default UseStateTutorial


