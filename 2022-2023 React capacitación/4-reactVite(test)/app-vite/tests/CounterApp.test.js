import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/components/CounterApp";

describe('Esto es una prueba a CounterApp', () => {
    const initialValue = 10;
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={10} />);
        expect(screen.getByText(10)).toBeTruthy();//verifica el value si es verdadero pasa todo bien, depende del valor fijado en la linea de arriba
        //  expect( screen.getByRole('heading',{ level: 2}).innerHTML ).toContain('10')

    });


    test('Debe de incrementar con el boton +1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1')); //al dar click +1 del initialValue(10) con esto incremento a 11
        expect(screen.getByText('11')).toBeTruthy();//verifica si son 11.

    });
    test('Debe de incrementar con el boton -1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1')); //al dar click +1 del initialValue(10) con esto incremento a 11
        expect(screen.getByText('9')).toBeTruthy();//verifica si son 11.
        //screen.debug() esto imprime el renderizado que daria segun el test.
    });
    test('Debe de funcionar el boton de limpiar', () => {
        render(<CounterApp value={355} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));//hasta aqui este evento fueron dos veces, lo cual da click dos veces al +1
        // fireEvent.click(screen.getByText('Reset'));//esto reinicia el contador a segun el value que tenga el value del render CounterApp.
        // expect( screen.getByText( 355 ) ).toBeTruthy(); //verificamos si es verdadero el valor del counterapp value(355) con el expect( screen.getByText( 355 ) ).toBeTruthy();
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'})); // el name: 'btn-reset' debe ser tal cual como en el componente CounterApp declarado 'aria-label="btn-reset"'
        expect( screen.getByText( 355 ) ).toBeTruthy(); //verifica el valor.
        // screen.debug();
    });


})