import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback(
        (value = 1) => {//aqui se recibe el parametro de la  funcion useCallback
            console.log('setCounter(counter + 1);');
            setCounter((c) => c + value);
        },
        [],
    )


    return (
        <>
            <h1>useCalback Hook: {counter}</h1>
            <ShowIncrement increment={increment} />
        </>

    )
}
