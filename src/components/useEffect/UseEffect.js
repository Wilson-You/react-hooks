import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])
    const [windowWith, setWindowWith] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWith(window.innerWidth)
    }
    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [resourceType])
    return (
        <div >
            <div className='useeffect-container'>
                <div className='btn-container'>
                    <button onClick={() => setResourceType('posts')}>Posts</button>
                    <button onClick={() => setResourceType('users')}>Users</button>
                    <button onClick={() => setResourceType('comments')}>Comments</button>
                </div>
                <div><p className='resource'>{resourceType}</p></div>
            </div>

            <div>
                <p className='showWidth'>{windowWith}</p>
            </div>
            <div className='items'>
                {items.map(item => {
                    return <pre key={Math.random() * 1999}>{JSON.stringify(item)}</pre>
                })}
            </div>

        </div>
    )
}

export default UseEffect
