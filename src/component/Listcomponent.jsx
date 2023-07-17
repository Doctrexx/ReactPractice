import { useState } from "react";

// const ListComponent = () => {
// const [userInput, setUserInput] = useState('your name');
// const [formData, setFormData] = useState("");
// console.log('before use state')
// let [data, setData] = useState(0);

// const submitHandler = (event) => {
//     console.log(event)
//     setUserInput(event.target.value);
//     event.preventDefault();
// }

// const handleSubmit = (event) => {
//     event.preventDefault();
//     setFormData({
//         name: event.target.elements.name.value,
//         email: event.target.elements.email.value
//     });
// };

// console.log('1st render')

// const increment = () => {
// setData((prevState) => prevState + 1);
// setData(data++);
// console.log('2nd render')

// }

// const decrement = () => {
// setData((prevState) => prevState - 1);
// setData(data--);
// }

// return (
// <>
// {/* <form onSubmit={submitHandler}>
//     <label>enter your name</label>
//     <input type="text" onChange={(event) => setUserInput(event.target.value)}></input>
//     <button onSubmit={submitHandler} type="submit">submit</button>
//     <p>{userInput}</p>
// </form>

// <form onSubmit={handleSubmit}>
//     <input type="text" name="name" />
//     <input type="text" name="email" />
//     <button type="submit">Submit</button>
//     <p>{formData.name} {formData.email}</p>
// </form> */}

// <button onClick={decrement}>(-)</button>
// <p>{data}</p>
// <button onClick={increment}>(+)</button>

// </>
// );
// }
// export default ListComponent;


// ---------------------------------------------------------------

// const ListComponent = () => {
//     const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

//     const handleDelete = (index) => {
//         setItems((prevItems) => {
//             return prevItems.filter((_, i) => i !== index);
//         });
//     };

//     return (
//         <div>
//             <h2>Items List</h2>
//             {items.map((item, index) => (
//                 <ListItem key={index} item={item} onDelete={() => handleDelete(index)} />
//             ))}
//         </div>
//     );
// };

// const ListItem = ({ item, onDelete }) => {
//     return (
//         <div>
//             <span>{item}</span>
//             <button onClick={onDelete}>Delete</button>
//         </div>
//     );
// };

// export default ListComponent;

// -----------------------------------------------------------

const ListComponent = () => {
    const [count, setCount] = useState(0);

    // Example: Using useState in a loop
    const renderCounters = () => {
        const counters = [];
        for (let i = 0; i < count; i++) {
            counters.push(<Counter key={i} />);
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

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);

    return (
        <div>
            <p>Counter Value: {counterValue}</p>
            <button onClick={() => setCounterValue(counterValue + 1)}>
                Increment Counter
            </button>
        </div>
    );
};

export default ListComponent;


// -----------------------------------------------------------
// const ListComponent = () => {
//     const [count, setCount] = useState(0);
//     function MyButton() {


//         function handleClick() {
//             setCount(count + 1);
//         }

//         return (
//             <button onClick={handleClick}>
//                 Clicked {count} times
//             </button>
//         );
//     }

//     return (
//         <div>
//             <h1>Counters that update separately</h1>
//             <MyButton />
//             <button>{count}</button>
//             <MyButton />
//         </div>
//     );
// }

// export default ListComponent;