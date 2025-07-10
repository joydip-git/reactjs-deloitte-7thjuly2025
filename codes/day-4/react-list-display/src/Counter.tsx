import { useState } from 'react'
import CounterOutput from './CounterOutput'

type CounterPropType = {
    messageValue: string
}
const Counter = (propObj: Readonly<CounterPropType>) => {
    const [count, setCount] = useState(0)
    const countHandler = () => {
        setCount(
            (current) => {
                return current + 1
            }
        )
    }

    return (
        <div>
            <h2>{propObj.messageValue}</h2>
            <br />
            <CounterOutput countData={count} counterHandlerFn={countHandler} />

        </div>
    )
}

export default Counter