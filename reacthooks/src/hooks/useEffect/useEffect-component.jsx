// rendering component - component name should start with capital letter
import { useEffect, useState } from 'react';

function UseEffectComponent() {
    const [count, setCounter] = useState(2);

    // useEffect called once page load or mounted and it can call on unmount as well
    // [] this bracket contains the dependencies like count if count update or anything happend on count 
    // useEffect will call here we can fetch the data from the server
    // empty dependency bracket will call once 
    useEffect(() => {
        console.log('useEffect called', count);
        // for unmount we can call or return function 
        return function() {
            console.log("unmount the component")
        }
    }, []);

    // with dependecy it will call every change on dependencies
    useEffect(() => {
        console.log("Component called on the dependencies", count)
    }, [count])
    
    const handleIncrement = () => {
        setCounter(count + 1);
    }

    const handleDecrement = () => {
        setCounter(count - 1);
    }

    return (
        <div>
            <h1 className='text-center my-5'>useEffect Component</h1>
            <div className='text-center'>Count: {count}</div>
            <div className='text-center'>
                <button 
                    onClick={() => handleIncrement()}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10'
                    >Increment</button> 
                <button 
                    onClick={() => handleDecrement()}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    >Decrement</button>
            </div>
        </div>
    )

}

export default UseEffectComponent;