import { act, renderHook, screen } from "@testing-library/react"
import { useForm } from "../../hooks/useForm";

describe('pruebas en el useForm', () => { 

    const initialForm = {
        name:'prueba',
        email: 'prueba@example.com',
    }

    test('debe de regresar los valores por defecto', () => { 

        const {result} = renderHook( ()=> useForm(initialForm));
        // const {} = result.current;
        // console.log(result.current);

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: { name: 'prueba', email: 'prueba@example.com' },
            onInputchange: expect.any( Function),
            onResetForm: expect.any( Function),
          })

     });

     test('debe de cambiar el nombre del formulario', () => { 
        const newValue = 'Juan';

        const {result} = renderHook( ()=> useForm(initialForm));
        const { onInputchange } = result.current;
        act(()=> onInputchange({target : {name : 'name', value : newValue}}));

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

      });

      test('debe de realizar el reset al nombre del formulario', () => { 
        const newValue = 'Juan';

        const {result} = renderHook( ()=> useForm(initialForm));
        const { onInputchange, onResetForm } = result.current;
        
        act(()=> {
            onInputchange({target : {name : 'name', value : newValue}});
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

      });
 });