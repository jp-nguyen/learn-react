import React, { useState } from "react";
import Button from "./Button"

function Counter() {
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>
                We clicked on this {count} times.
            </h1>
            <Button onClick={() => {
                setCount(count + 1);
                console.log(count);
            }}>Click me!</Button>
        </div>
    );
}

export default Counter;