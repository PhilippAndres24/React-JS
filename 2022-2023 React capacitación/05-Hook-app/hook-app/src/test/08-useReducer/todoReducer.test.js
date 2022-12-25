import { todoReducer } from "../../08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        descripcion: 'Demo Todo',
        done: false,
    }];

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});    //al hacer esto pasamos de largo al return, sin considerar los case del switch, porlo tanto nos retorna initialState
        expect(newState).toBe(initialState);

    });

    test('debe de agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                descripcion: 'Nuevo Todo #2',
                done: false,
            }
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    })

    test('debe de eliminar un todo', () => {
        
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    })

    test('debe de realizar el Toggle del todo', () => { 
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,
        }
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe( true );
    })

});
