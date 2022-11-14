import { useState } from 'react';
import Border from './Border';
import './Counter.css';

function Counter(props) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if (count < props.max) {
            setCount(count + 1)
        }
    }

    const handleDecrement = () => {
        if (count > props.min) {
            setCount(count - 1)
        }
    }

    return (
        <Border>
            <div className='Counter'>
                <button onClick={handleDecrement}>-</button>
                <label>{count}</label>
                <button onClick={handleIncrement}>+</button>
            </div>
        </Border>
    )
}

export default Counter

