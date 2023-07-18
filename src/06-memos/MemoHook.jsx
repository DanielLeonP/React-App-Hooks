import { useMemo, useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Iteracion ', iterationNumber);

    }
    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <Small value={counter} /> </h1>
            <br />
            <h4>{memorizedValue}</h4>
            <br />
            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >+1</button>
            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
