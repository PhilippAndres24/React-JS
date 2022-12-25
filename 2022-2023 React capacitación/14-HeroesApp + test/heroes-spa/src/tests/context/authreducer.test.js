import { authReducer } from "../../auth/context";
import { types } from "../../auth/types/types";


describe('Pruebas en AuthReducer.js ', () => {

    test('debe de retonar el estado por defecto', () => {

        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
        console.log(state);
    });

    test('debe de (login) llamar el login autenticar y establecer el user.', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '123',
            }
        }
        const state = authReducer({ logged: false }, action)
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
    });

    test('debe de (logout) borrar el name usuario y logged en false.', () => {
        const state = {
            logged: true,
            user: {id: '123', name:'Juan'}
        }

        const action = {
            type: types.logout
        }
        const newState= authReducer(state, action);
        expect ( newState ).toEqual({ logged:false })

    });
});