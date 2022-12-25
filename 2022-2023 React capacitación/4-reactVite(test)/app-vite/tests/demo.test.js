describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe faltar', () => {

        //1. Inicialzacion
        const message = 'Hola Mundo';

        //2. estimulo
        const message2 = message.trim();
        // 3. Observar el comportamiento esperado
        //En teoria "toBe" estaria esperando que el message fuera igual que el message2
        expect(message).toBe(message2);
    });
});