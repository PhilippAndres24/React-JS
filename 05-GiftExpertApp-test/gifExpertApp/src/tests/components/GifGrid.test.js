import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs'); //mock completo del path.


describe('Pruebas en GifGrid', () => { 

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {  
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading : true,
        })
        
        render(<GifGrid category={category}/>);
        expect ( screen.getByText('Cargando...'));
        expect ( screen.getByText( category ) );
        // screen.debug();
    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {  //linea 5 para mock.
        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/goku.jpg',
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading : false,
        });

        render(<GifGrid category={category}/>);
        expect( screen.getAllByRole('img').length ).toBe(1); //verifica si existe un gifs, en este caso tenemos un puro objeto declarado como constante gifs.
        // screen.debug();
    });

 });