import { render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/userContext";
import { HomePage } from "../../09-useContext/HomePage";

describe('Pruebas en <HomePage />', () => {

    const user = {
        id:1,
        name: 'Iwasoski',
    }

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value = {{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria-label
        // console.log(preTag.innerHTML)

        // screen.debug();

    });

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value = {{ user }} >
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria-label
        
        expect(preTag.innerHTML).toContain( user.name );
        expect(preTag.innerHTML).toContain( `${user.id}`);

        screen.debug();

    });

});