import React, { useContext } from 'react'
import { AppContext } from './UseContextTutorial'



const UserName = () => {
    const { userName } = useContext(AppContext)
    return (<div>
        <h1>UserName{userName}</h1>
    </div>)
}

export default UserName