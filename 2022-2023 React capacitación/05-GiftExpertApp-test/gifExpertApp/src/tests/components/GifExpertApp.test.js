import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../../GifExpertApp";

describe('Pruebas en el GifExpertApp', () => { 

    test('should first', () => {

        render( <GifExpertApp />);
        screen.debug();
        //ver este punto.
     })
 })