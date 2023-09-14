import React from 'react'
import { useState } from 'react';

function Incdec(props) {
    const [num, setNum] = useState(10);

    function inc(n) {
     setNum(num + n);
    }
    function dec(n) {
     setNum(num - n);
    }
    
    return (
        <>
        <div className='hooker'>
            <h1 className='statie'>{num}</h1>
            <div className='twobtns'>
                <button onClick={()=>inc(5)}>Increase</button>
                <button onClick={()=>dec(1)}>Decrease</button>
            </div>
        </div>
    </>
    )
}

export default Incdec
