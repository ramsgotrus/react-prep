import React, { useState, useEffect } from 'react'
import axios from 'axios';

const TablHeader = ({ item }) => {
    const keys = Object.keys(item)
    return (
        <tr>
            {keys.map((item) => (
                <th colSpan='10'>{item}</th>
            ))}
        </tr>
    )
}

const TableBody = ({ items }) => {
    return (items.map((item) => (
        <tr>
            <td>{item.postId}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.body}</td>
        </tr>
    ))
    )
}


function TableComponent() {

    const [isLoading, setIsLoading] = useState(false)

    const [isError, setIsError] = useState(false)

    const [commentData, setCommentData] = useState([])

    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(commentData.length / 18)

    const pages = [...Array(totalPages + 1).keys()].slice(1)

    const lastIndex = currentPage * 18

    const firstIndex = lastIndex - 18

    const visibleData = commentData.slice(firstIndex, lastIndex)




    useEffect(() => {
        const getComment = async () => {
            const getResponse = await axios.get('https://jsonplaceholder.typicode.com/comments')
            const getData = await getResponse.data
            if (!!getData) {
                setCommentData(getData)
                setIsError(false)
                setIsLoading(false)
            }
            else {
                setIsError(true)
                setIsLoading(false)
            }
        }
        getComment()
        return (() => {
            getComment()
        })

    }, [])

    const theadStyle = () => {
        return {
            backgroundColor: '#CCC',
            color: '#333',
            bordr: '1px solid #CCC'
        }
    }
    const pageDiv = () => {
        return {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minMax(1px, 40px)',
            justifyContent: 'center',
            padding: '10px',
        }
    }

    const searchDiv = () => {
        return {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minMax(1px, 200px)',
            justifyContent: 'center',
            padding: '10px',
            gridGap: '10px',
        }
    }
    return (<div>
        <div style={searchDiv()}>
            <input />
            <button>Search</button>
            <button>X</button>
        </div>
        {visibleData.length > 0 && <table>
            <thead style={theadStyle()}>
                <tr>
                    <th>Post Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                <TableBody items={visibleData} />
            </tbody>
        </table>
        }
        <div style={pageDiv()}>
            {pages.map((page) => (
                <span style={{ cursor: 'pointer' }} onClick={() => setCurrentPage(currentPage + 1)}>{page} |</span>
            ))}
        </div>

    </div>)

}

export default TableComponent