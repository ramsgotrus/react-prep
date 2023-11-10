
//useReducer i similar to useState but if your trying to execute more thank one state in 1 action then you should useReducer.
//Example to update users lists

import React, { useReducer, useState } from 'react'
import '../index.css'
import { USERSDATA, NEWUSER } from '../data/users'

const ActionType = { Add: 0, Update: 1, Delete: 2 }

const ListItem = ({ user, onClick }) => {
    const { name, gender, picture, location, login } = user
    const [showEdit, setShowEdit] = useState(false)
    const [newValue, setNewValue] = useState(name.first)

    const handOnchange = (e) => {
        e.preventDefault()
        const newValue = e.target.value
        setNewValue(newValue)
    }

    const handleUpdate = () => {
        const newUser = user
        newUser.name.first = newValue
        onClick(newUser, ActionType.Update)
        setShowEdit(false)
    }

    const handleDelete = () => {
        onClick(user, ActionType.Delete)
        setShowEdit(false)
    }

    return (
        <div className='userItem'>
            {showEdit ? <input value={newValue} onChange={(e) => handOnchange(e)} type='text' /> : <p>{name.first}</p>}
            {showEdit ? <div> <button id={login.uuid} onClick={handleUpdate}>Update</button>
                <button id={login.uuid} onClick={handleDelete}>Delete</button>
                <button onClick={() => setShowEdit(prev => !prev)}>Cancel</button>
            </div> : <button onClick={() => setShowEdit(prev => !prev)}>edit</button>}
            <p>{name.last}</p>
            <p>{gender}</p>
            <img src={picture.thumbnail} />
            <p>{location.city}</p>
            <p>{location.country}</p>
            <p>{location.postcode}</p>
            <button onClick={() => onClick(null, ActionType.Add)}>Add</button>
        </div>
    )

}

const List = ({ users, handleDispatch }) => {

    return (
        <div className='usersList'>
            {users ? users.map((user) => (
                <ListItem user={user} onClick={handleDispatch} />
            )) : ''}
        </div>
    )
}


const reducer = (state, action) => {

    switch (action.type) {
        case ActionType.Add:
            return [...state, NEWUSER]
        case ActionType.Update:
            const payloadValue = action.payload
            const getUser = state.findIndex(user => user.login.uuid === payloadValue.login.uuid)
            state.splice(getUser, 1)
            return [...state, payloadValue]
        case ActionType.Delete:
            const deleteUser = action.payload
            const getDeleteUser = state.findIndex(user => user.login.uuid === deleteUser.login.uuid)
            state.splice(getDeleteUser, 1)
            return state
        default: return state
    }

}

const UseReducerTutorial = () => {

    const [state, dispatch] = useReducer(reducer, USERSDATA)

    const handleClickDispatch = (user, actionType) => {
        dispatch({ type: actionType, payload: actionType === ActionType.Update || ActionType.Delete ? user : null })
    }

    return (<div>
        <List users={state} handleDispatch={handleClickDispatch} />
    </div>)
}

export default UseReducerTutorial