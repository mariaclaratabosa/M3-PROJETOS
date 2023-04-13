import { useContext } from "react"
import { CounterContext } from "../../contexts/counter"

function Counter() {
    const { counter } = useContext(CounterContext)
    
    return (
        <h1>{counter}</h1>
    )
}

export default Counter