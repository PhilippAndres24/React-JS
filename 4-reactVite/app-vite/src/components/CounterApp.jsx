import PropTypes from 'prop-types';
import { useState } from 'react';

// const value = () =>{
//     return ( 
//         
//             19
//         </>
//     );
// };
const value = 0;
// console.log(value)
export const CounterApp = ( {value} ) => {

    const [counter, setCounter] = useState(0);

    if (!value ) {
        throw new Error('Error: Invalid value, debe ser Number.')
    }

    const handleSum = (v) =>{
        // setCounter( counter + 1 );
        setCounter( (c)=> c+1);
        // console.log(v);
    }

    const handleReset = () => setCounter(value);
    const handleSustraccion = () =>{
        setCounter( counter - 1 );
        // setCounter( (c)=> c-1);
        // console.log(v);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleSum }>
                +1
            </button>
            <br />
            <button onClick={ handleReset }>
                Limpiar
            </button>
            <br />
            <button onClick={ handleSustraccion }>
                restar
            </button>
        </>

    );
    
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

// CounterApp.defaultProps = {
//     value: 'No existe numero.'
// }
