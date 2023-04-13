import { createContext, useState } from "react"

export const CounterContext = createContext({})

function CounterProvider({ children }) {
    const [counter, setCounter] = useState(0)

    function aumentar() {
        setCounter(counter + 1)
    }
    
    function diminuir() {
        setCounter(counter - 1)
    }

    return(
        <CounterContext.Provider value={{ counter, aumentar, diminuir }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;