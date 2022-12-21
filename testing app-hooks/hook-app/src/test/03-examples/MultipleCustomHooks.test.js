import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples";
import { useFetch } from "../../hooks";


// jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useFetch');


describe('Pruebas en MultipleCustomHooks', () => {
    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />)

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Ricky and Morty'))

        const nextButton = screen.getByRole('button', { name: 'Siguiente Clase' });
        expect(nextButton.disabled).toBeTruthy();

        // screen.debug();

    });

    test('debe de mostrar un Personaje', () => {

        useFetch.mockReturnValue({
            data: [{ species: 'jack', name: 'jack' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        screen.debug();

    })
});