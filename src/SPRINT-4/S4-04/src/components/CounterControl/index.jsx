import { useContext } from "react"; // importando o hook
import { CounterContext } from "../../contexts/counter"

function CounterControls() {
    const { aumentar, diminuir } = useContext(CounterContext)

    return (
        <div>
            <button onClick={diminuir}>-</button>
            <button onClick={aumentar}>+</button>
        </div>
    )
}

export default CounterControls;