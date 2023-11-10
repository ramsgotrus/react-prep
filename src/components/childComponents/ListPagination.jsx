import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ListItem = ({ item }) => {
    ///const data = "<h1 style='color:blue;'>Some Text</h1>"   <p dangerouslySetInnerHTML={{ __html: data }} />
    const { postId, id, name, email, body } = item
    const style = () => {
        return {
            padding: '1rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minMax(1px, 1fr))',
            border: '1px solid black',
            gridgap: '50px',
            color: '#333'
        }
    }
    return (<div id={id} style={style()}>

        <p>{postId}</p>
        <p>{name}</p>
        <p>{email}</p>
        <p>{body}</p>
    </div>)

}

function ListPagination() {

    const [commentData, setCommentData] = useState([])

    const [isError, setIsError] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)

    const numberOfTotalPages = Math.ceil(commentData.length / 50)

    const pages = [...Array(numberOfTotalPages + 1).keys()].slice(1)

    const indexOfLastComment = currentPage * 50

    const indexOfFirstComment = indexOfLastComment - 50

    const visibleComment = commentData.slice(indexOfFirstComment, indexOfLastComment)

    const divStyle = () => {
        return {
            display: 'grid',
            padding: '2rem'
        }
    }

    const pageDiv = () => {
        return {
            color: 'black',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minMax(1px,100px)',
            justifyContent: 'center'
        }
    }

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments")

            const data = await response.data

            if (!!data) {
                setCommentData(data)
                setIsLoading(false)
            }
            else {
                setIsError(true)
                setIsLoading(false)
            }
        }
        getData()
        return (() => {
            getData()
        })
    }, [])

    return (<div style={divStyle()}>
        {isLoading ? <h1>There was an error while fetching</h1> : ''}
        {isError ? <h1>Loading...</h1> : ''}
        {visibleComment && <div>
            {visibleComment.map((item) => (
                <ListItem item={item} />
            ))}
        </div>}
        <div style={pageDiv()}>
            {pages && pages.map((i) => (
                <h1 key={i} onClick={() => setCurrentPage(i)}>{i}</h1>
            ))}
        </div>
    </div>)
}

export default ListPagination