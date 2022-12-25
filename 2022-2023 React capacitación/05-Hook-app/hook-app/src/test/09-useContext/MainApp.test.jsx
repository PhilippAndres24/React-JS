import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { LoginPage } from "../../09-useContext/LoginPage";
import { MainApp } from "../../09-useContext/MainApp"

describe('Pruebas en <MainApp />', () => {
    test('debe de mostrar el mensaje el HomePage', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>

        );
        // screen.debug();
        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('debe de mostrar el loginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>

        );
        // screen.debug();
        expect(screen.getByText('LoginPage')).toBeTruthy();
    });

    test('debe de mostrar el AboutPage', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>

        );
        screen.debug();
        expect(screen.getByText('AboutPage')).toBeTruthy();
    });
});