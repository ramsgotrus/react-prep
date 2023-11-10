import React, { useEffect } from 'react'

const withLoading = (WrappedComponent) => {
    const WithLoading = (props) => {
        const divStyle = () => {
            return {
                padding: '1rem',
                backgroundColor: '#CCC',
                color: '#333'
            }
        }
        return <div style={divStyle()}>
            <WrappedComponent {...props} />
        </div>
    }
    return WithLoading
}

export default withLoading
