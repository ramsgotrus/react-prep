//useContext allow you to manage state very easily without pass a lot of props to child components.
//createContext allow us to pass the state to the tree of the child components.

import React, { createContext, useState, useContext } from 'react'
import Login from './Login'
import UserName from './UserName'


export const AppContext = createContext(null)

const UseContextTutorial = () => {
    const [userName, setUserName] = useState("")

    return (<AppContext.Provider value={{ userName, setUserName }}>
        <Login />
        <UserName />
    </AppContext.Provider >
    )
}

export default UseContextTutorial