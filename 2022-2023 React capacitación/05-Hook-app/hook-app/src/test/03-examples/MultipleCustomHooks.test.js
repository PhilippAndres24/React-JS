import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";


jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');


describe('Pruebas en MultipleCustomHooks', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => { //antes de iniciar cada prueba, con eso se limpia las pruebas
        jest.clearAllMocks();
    });
    
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
        const nextButton = screen.getByRole('button', { name: 'Siguiente Clase' });
        expect(nextButton.disabled).toBeFalsy();

    });

    test('debe de llamar la funcion de incrementar', () => {

        const mockIncrement = jest.fn();
        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement
        });


        useFetch.mockReturnValue({
            data: [{ species: 'jack', name: 'jack' }],
            isLoading: false,
            hasError: null
        });



        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Siguiente Clase' });
        fireEvent.click(nextButton);
        expect( mockIncrement ).toHaveBeenCalled();
        
    })
});