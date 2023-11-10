import React, { useState, useReducer, useEffect } from 'react'

function UsersTable() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [editUser, setEditUser] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(users.length / 25)
    const pages = [...Array(totalPages + 1).keys()].slice(1)
    const lastIndex = currentPage * 25
    const firstIndex = lastIndex - 25
    const visibleData = users.slice(firstIndex, lastIndex)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const updateResponse = await fetch('https://jsonplaceholder.typicode.com/posts/2', {
            method: 'DELETE',
            body: {
                userId: editUser.userId,
                id: editUser.id,
                title: editUser.title,
                body: editUser.body
            }
        })
        const checkResponse = await updateResponse.json()
        if (checkResponse) {
            setEditUser(null)
        }
    }
    const handleChange = (event) => {
        event.preventDefault()
        setEditUser({ ...editUser, [event.target.id]: event.target.value })
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
            const getData = await response.json()
            if (!!getData) {
                setUsers(getData)
            }
        }
        fetchData()
    }, [])

    const contentDiv = () => {
        return {
            padding: '1rem'
        }
    }

    const pagesDiv = () => {
        return {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minMax(100px, 40px)',
            gridGap: '1px',
            justifyContent: 'center',
            padding: '30px'
        }
    }

    return <div style={contentDiv()}>
        {visibleData.length > 0 ? <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>userId</th>
                    <th>title</th>
                    <th>body</th>
                    <th>edit</th>
                </tr>
                <tr></tr>
            </thead>
            <tbody>
                {visibleData.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>
                            {editUser && editUser.id === user.id ? <form onSubmit={handleSubmit}>
                                <label>title</label>
                                <input id='title' value={editUser.title} type='text' onChange={handleChange}></input>
                                <button>Update User</button>
                                <button onClick={() => setEditUser(null)}>Cancel</button>
                            </form> : <p>{user.title}</p>}
                        </td>
                        <td>{user.title}</td>
                        <td>{user.body}</td>
                        <td>
                            <button onClick={() => setEditUser(user)}>edit</button>
                        </td>
                    </tr>

                ))}
            </tbody>
        </table> : 'Sorry No Data'}
        {visibleData.length > 0 ? <div style={pagesDiv()}>
            {pages.map((item) => (
                <span key={item}>{item}</span>
            ))}
        </div> : ''}
    </div>

}

export default UsersTable