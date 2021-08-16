import { useState } from 'react';
import App2 from "./App2"
import Counter from "./Counter"
import TestHook from './TestHook';

const AppCounter = () => {
    const [state, setState] = useState("Some Text")
    const [name, setName] = useState("Moe")

    const changeName = () => {
      setName("Steve")
    }

    return (
      <div className="App">
        <App2 />
        <h1> Counter </h1>
        <Counter />
        <h1> Basic Hook useState </h1>
        <TestHook name={name} changeName={changeName}/>
       </div>
    )
}

export default AppCounter;