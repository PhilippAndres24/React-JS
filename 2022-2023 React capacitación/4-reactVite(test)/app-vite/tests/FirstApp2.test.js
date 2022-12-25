import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/components/FirstApp";

describe('Prueba con FirstApp', () => {
    const title = 'Hola, soy Goku';
    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola, soy Goku"', () => {

        render(<FirstApp title={title} />);
        // screen.debug(); //nos permite ver lo que se esta renderizando en este caso la linea 14.
        expect(screen.getByText(title)).toBeTruthy(); //toBeTruthy verifica si existe.
    })

    test('debe de mostrar el titulo en h1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });
    test('debe de mostrar el titulo enviado por props', () => {
        render(<FirstApp
            title={title}
        />);
        expect( screen.getAllByText (title).length).toBe(1);//con esto vemos cant {title} en nuestro componente renderizado
        // en este caso tenemos 2 {title} en firstapp component
    });
});

 //esto nos permite ver que cambio se realizaron en nuestro componente.