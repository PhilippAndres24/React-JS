import { act , renderHook } from "@testing-library/react";

import { useCounter } from "../../hooks/useCounter";

describe('Pruebas en useCounter', () => {
    test('debe de retonar los valores por defectos.', () => {


        const { result } = renderHook(() => useCounter());
        //    console.log(result);
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(1); //es el mismo valor que fue colocado en initialValue de useCounter.js

        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('debe de generar el counter con el valor de 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);
    })

    test('debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter,  increment, decrement } = result.current;

        act(()=> increment(), increment(2)); //ejectumos el evento increment 

        expect (result.current.counter).toBe(103);
    });

    test('debe de decrementar el contador', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement } = result.current;

        act( () => {
            decrement();
            decrement(2);
        });

        expect( result.current.counter ).toBe(97);

    });
    test('debe de realizar el reset a el contador', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter,increment, decrement, reset } = result.current;

        act( () => {
            decrement();
            increment(30);
            reset();
        });
    
        expect( result.current.counter ).toBe(100);

    });
});