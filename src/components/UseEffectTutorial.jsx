//UseEffect manily used to fetch api call and it lets you synchronize a component with an external system.
//useEffectLayout ...will effect before browser print the dom elements.
import React, { useEffect } from 'react'
import axios from 'axios'

const UseEffectTutorial = () => {

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
            console.log(response.data)
            console.log('how many times')
        }).catch((exc) => console.log(exc))
    }, [])
    return <div>Hello World</div>

}
export default UseEffectTutorial