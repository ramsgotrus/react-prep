import React, { useEffect, useState } from 'react'
import { getUsers, updateUser, EditUser } from '../../data/useGetUsers'

function ReactForm() {
    const [currentUser, setCurrentUser] = useState({});
    const [error, setError] = useState(false);
    const [state, setState] = useState('')


    const handleSubmit = async () => {

        await updateUser(currentUser).then((res) => {
            setState('Updated')
            console.log('res', res)
        })
            .catch((ex) => {
                setState('Error')
                setError(ex.toString())
            })
    }

    const handleChange = (event) => {
        event.preventDefault()
        console.log('va', { ...currentUser })
        setCurrentUser({ ...currentUser, [event.target.id]: event.target.value })
    }

    useEffect(() => {
        setState('loading')
        getUsers().then((res) => {
            setCurrentUser(res)
            setState('')
        })
            .catch((ex) => {
                setState('Error')
                setError(ex)
            })
    }, [])

    if (state === 'Error') {
        return (<h4>{error.toString()}</h4>)
    }


    return (<form id={currentUser ?.id} onSubmit={handleSubmit}>
        <label>User id</label>
        <label>{currentUser ?.userId}</label>
        <label>Title</label>
        <input id='title' value={currentUser ?.title} type='text' onChange={handleChange}></input>
        <label>body</label>
        <label>{currentUser ?.body}</label>
        <button>Submit</button>
    </form>)
}

export default ReactForm