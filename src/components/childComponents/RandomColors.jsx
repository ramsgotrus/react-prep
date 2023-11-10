import React, { useState } from 'react'
import './styles.css'
import useInterval from '../../data/useInterval'

const RandomColorGenerator = () => {
    const [isStopped, setIsStopped] = useState(false)
    const [interValValue, setInterValValue] = useState(null)
    const { bgColor } = useInterval(isStopped, interValValue)

    return (<div className='colorContent'>
        <input className='timeInput' placeholder='Please enter value'></input>
        <div className='colorBox' style={{ backgroundColor: bgColor }} />
        <div className='actiondiv'>
            <button onClick={() => {
                setInterValValue(5000)
                setIsStopped(false)
            }

            }>Start</button>
            <button onClick={() => {
                setInterValValue(null)
                setIsStopped(true)
            }
            }>Stop</button>
        </div>
    </div>)

}
export default RandomColorGenerator
