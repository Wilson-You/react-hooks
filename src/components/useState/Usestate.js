import React, { useState } from 'react'

function Usestate() {
    console.log('I was rendered');
    const [state, setState] = useState(() => {
        console.log('voked');//Eveytime state changes the component is rerendered
        return { count: 0, theme: 'blue' }
    })

    const decrement = () => {
        setState(preState => {
            return {
                ...preState, count: preState.count - 1
            }
        })
    }
    const increment = () => {
        setState(preState => {
            return { ...preState, count: preState.count + 1 }
        })
    }
    return (
        <div className='usestate-container'>
            <button onClick={increment}>+</button>
            <span>{state.count}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Usestate
