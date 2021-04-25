import React from 'react'
import FunctionTextComponent from './FunctionTextComponent'
import ThemeProvider from './ThemeProvider'
const UseContext = () => {
    return (
        <ThemeProvider >
            <FunctionTextComponent />
        </ThemeProvider>
    )
}

export default UseContext
