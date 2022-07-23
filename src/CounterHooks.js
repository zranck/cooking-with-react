import React, { useState, useContext } from 'react'
import { ThemeContext } from './App';

export default function CounterHooks({initialCount}) {
    const [count, setcount] = useState(initialCount);
    const style = useContext(ThemeContext)
    return (
        <div>
            {/* you cannot use class in JSX you must use className because class is reserved in js */}
            <button style={style} onClick={() => setcount(prevCount => prevCount - 1)}>-</button>
            <span>{count}</span>
            <button style={style} onClick={() => setcount(prevCount => prevCount + 1)}>+</button>
        </div>
    )
}