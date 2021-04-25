import React from 'react'
import FunctionTextComponent from './FunctionTextComponent'
import ThemeProvider from './ThemeProvider'
import Test from './Test'
const UseContext = () => {
    return (
        <ThemeProvider >
            <FunctionTextComponent />
            <Test />
        </ThemeProvider>
    )
}

export default UseContext
