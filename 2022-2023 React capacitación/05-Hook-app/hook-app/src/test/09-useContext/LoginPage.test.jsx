import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../09-useContext/context/userContext"
import { LoginPage } from "../../09-useContext/LoginPage"

describe('Pruebas en <loginPage />', () => {

    const user = {
        id: 1,
        name: 'Iwasoski',
    }
    
    const setUserMock = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value = {{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        )
        const preUser = screen.getByLabelText('preuser');

    })


    test('debe de llamar el setUser cuando se hace click en el boton', () => {
        
        render(
            <UserContext.Provider value = {{user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const clickBtn = screen.getByLabelText('btn');
        fireEvent.click(clickBtn);

        expect ( setUserMock ).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "Juan"});
        // screen.debug();

    })
})