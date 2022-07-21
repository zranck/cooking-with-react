import React, { useState } from 'react'

export default function CounterHooks({initialCount}) {
    const [count, setcount] = useState(initialCount)
    return (
        <div>
            {/* you cannot use class in JSX you must use className because class is reserved in js */}
            <button onClick={() => setcount(prevCount => prevCount - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setcount(prevCount => prevCount + 1)}>+</button>
        </div>
    )
}