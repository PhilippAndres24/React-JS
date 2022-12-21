const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../components/GifItem");

describe('Pruebas en GifItem', () => { 
    // 
    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'
    
    // 
    
    test('debe hacer match con el snapshot', () => {

        const { container } = render(<GifItem 
            title={ title }
            url={ url}
         />)
         expect ( container ).toMatchSnapshot();

    });


    test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 

        render(<GifItem 
            title={ title }
            url={ url}
         />)

        const { src, alt } = screen.getByRole('img');
        expect ( src ).toBe(url); 
        expect ( alt ).toBe(title);
        // expect ( screen.getByRole('img').src).toBe( url );
        // expect ( screen.getByRole('img').alt).toBe( title );
        // expect ( screen.getByRole('img').alt).toBe( url );
        // console.log( screen.getByRole('img')); //esto muestra la url de la img.
        //  screen.debug();
     });
     test('debe de mostrar el titutlo en el componente', () => { 

        render(<GifItem 
            title={ title }
            url={ url}
         />)

         expect ( screen.getByText( title )).toBeTruthy(); //con esto verificamos si existe.
      })
 });