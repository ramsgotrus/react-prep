import React, { Component } from 'react'
import { AppContext } from './UseContextTutorial'


export default class ClassContextComponent extends Component {
    static context = AppContext

    render() {
        const { isDark, setIsDark } = this.context
        console.log(isDark)
        return (<div>
            <h1>Class Component</h1>
            <button onClick={() => {
                setIsDark(!isDark)
            }}>Change Color</button>
        </div>)

    }

}