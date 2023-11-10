import React, { useEffect, useState } from 'react'
import withLoading from './WithLoading'

const StateType = { Loading: 0, Error: 1 }

const DropDownComponent = () => {
    const [userData, setUserData] = useState()
    const [state, setState] = useState()
    const [error, setError] = useState()
    const [searchText, setSearchText] = useState('')
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        setState(true)
        const fetchData = async () => {
            const fetchResponse = await fetch('https://jsonplaceholder.typicode.com/comments')
            const fetchData = await fetchResponse.json()
            if (!!fetchData) {
                setUserData(fetchData)
            }
        }
        fetchData()
    }, [])

    const dropDownStyle = () => {
        return {
            padding: '1rem',
            marginTop: '0px',
            border: '1px solid #CCC',
            borderRadius: '8px',
            width: '420px',
            background:
                `repeating-linear-gradient(#ddd 0 35px,transparent 35px 70px)`
        }
    }

    const contentStyle = () => {
        return {
            padding: '1rem',
            display: 'grid',
            justifyContent: 'center',
        }
    }

    const inputStyle = () => {
        return {
            border: '1px solid black',
            borderRadius: '8px',
            height: '50px',
            width: '450px'
        }
    }

    const handleOnChange = (event) => {
        event.preventDefault()
        const sarch = event.target.value
        setSearchText(sarch)
        if (sarch) {
            const filteredResults = userData.filter((item) => item.name.includes(sarch))
            setFilterData(filteredResults)
        }
        else setFilterData([])
    }

    return (<div style={contentStyle()}>
        <input style={inputStyle()} type='text' value={searchText} onChange={handleOnChange} placeholder='Search....' />

        {filterData.length > 0 ? <ul style={dropDownStyle()}>
            {filterData.map((title) => (
                <li >{title.name}</li>
            ))}
        </ul> : ''}


    </div>)
}
export default withLoading(DropDownComponent)