import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en componente AddCategory', () => {

  test('debe de cambiar el valor de la caja de texto', () => {

    render(<AddCategory
      onNewCategory={() => { }}
    />);

    const input = screen.getByRole('textbox'); //los textbox son los inputs. extraemos el input

    fireEvent.input(input, { target: { value: 'Saitama' } }); //Disparamos el evento //con esto cambiamos el valor de "value" como Saitama, evento input

    expect(input.value).toBe('Saitama'); //Y aca estamos comparando si el valor es "saitama" como le asignamos arriba.
    // screen.debug();
  });

  test('debe de llamar  onNewCategory si el input tiene un valor', () => {

    const inputValue = 'Saitama';
    const onNewCategory = jest.fn(); //estamos llamando a la funcion  onNewCategory de Addcategory.jsx linea 18. || 
    render(<AddCategory
      onNewCategory={onNewCategory}
    />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form'); //por si no toma el form, declarar un aria-label="form"


    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    screen.debug();

    expect(input.value).toBe(''); // Se verifica que el value aun sigue vacio.
    expect(onNewCategory).toHaveBeenCalled(); //verificamos si la funcion fue llamada.
    expect(onNewCategory).toHaveBeenCalledTimes(1);//verificamos si la funcion fue llamada solo una vez. en este caso tenemos solo 1 vez el codigo linea 18 addCategory.jsx


    expect(onNewCategory).toHaveBeenCalledWith(inputValue); //con esto se llama y colocamos el valor del inputValue. //se esta evaluando que se esta llamando el valor de la caja InputValue con el valor de saitama.



  })

  test('no debe de llamar el onNewCategory si el input está vació', () => {
    
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0); //estaria esperando que nuestra funcion no alla sido llamada. 

    expect(onNewCategory).not.toHaveBeenCalled(); //Estaria diciendo que no alla sido llamado la funcion onNewCategory.

  })

})