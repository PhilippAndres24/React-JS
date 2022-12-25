import { render } from "@testing-library/react";
import { FirstApp } from "../src/components/FirstApp";

describe('Prueba con FirstApp', () => {
    // test('debe hacer match con el snapshot', () => {
    //     const title = 'Hola, soy Goku';
    //     const { container } = render(<FirstApp
    //         title={title}
    //     />);
    //     // console.log(container);
    //     expect(container).toMatchSnapshot();

    // });

    // test('Debe mostrar el titulo en h1', () => {
    //     const title = 'Hola, soy Goku';
    //     const { container, getByText, getByTestId } = render(<FirstApp
    //         title={title}
    //     />);
    //     expect( getByText(title) ).toBeTruthy();

    //     // const h1 = container.querySelector('h1')
    //     // console.log(h1.innerHTML);
    //     // expect (h1.innerHTML).toContain( title );
    //         expect( getByTestId('test-title').innerHTML).toContain(title);

    // });

    test('debe de mostrar el titulo enviado por props', () => { 
        const title = 'Hola, soy Goku';
        const { getAllByText } = render(<FirstApp
            title={title}
        />);
        expect( getAllByText (title).length).toBe(1); //con esto vemos cant {title} en nuestro componente renderizado
                                                    // en este caso tenemos 2 {title} en firstapp component
     });
     

});

 //esto nos permite ver que cambio se realizaron en nuestro componente.