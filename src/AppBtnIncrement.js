import React, { useState } from 'react';
import './App.css';

function AppBtnIncrement() {
const [number, setNumber] = useState(0)
const onClick = () => {
    setTimeout(
        () => {
            const num = number + 1;
            setNumber(num)
        },
        1000
    )
}
return (
<div className="App">
    <span>
        {number}
    </span>
    <button onClick={onClick}>
         Button
    </button>
</div >
);
}

export default AppBtnIncrement;