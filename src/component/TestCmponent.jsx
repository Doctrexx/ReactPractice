import { useState } from "react";

const TestComponent = () => {
    const [count, setCount] = useState(0);

    const renderCounters = () => {
        const counters = [];

        for (let i = 0; i < count; i++) {
            // This is not allowed, as hooks cannot be called inside a loop directly
            // const [counterValue, setCounterValue] = useState(0);
            counters.push(
                <div key={i}>
                    {/* <p>Counter Value: {counterValue}</p> */}
                    {/* <button onClick={() => setCounterValue(counterValue + 1)}>Increment Counter</button> */}
                </div>
            );
        }
        return counters;
    };

    return (
        <div>
            <h2>List Component</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            {renderCounters()}
        </div>
    );
};

export default TestComponent;
