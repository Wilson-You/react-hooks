import React, { useState, useEffect, useRef } from 'react'

const UseRef = () => {
    const [name, setName] = useState('')
    const countObj = useRef(0)
    const inputRef = useRef()
    const focus = () => {
        console.log(inputRef);
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = 'lightgreen'
    }

    useEffect(() => {
        countObj.current = countObj.current + 1
    })
    return (
        <div className='useref-container'>
            <div>
                <label>Input your name:</label>
                <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            </div>
            <p className='displayname'>my name is {name} </p>
            <p className='displaytimes'>I have been rendered {countObj.current} times</p>
            <button onClick={focus}>Click to Focus</button>
        </div>
    )
}

export default UseRef
