import { useState } from 'react';


const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({target}) => {
        setInputValue(target.value); //con esto capturamos lo que escribimos en input.
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length <= 1) return;
        //con enter verificamos lo que se captura con submit el valor inputvalue.
        // setCategories( categories => [  inputValue,...categories ] );
        onNewCategory(inputValue.trim());
        setInputValue(''); //al ingresar el valor inputvalue, reiniciamos el campo en blanco.
    }

    return (
        <>
            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Buscar Gifts"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
        </>
    )
}

export default AddCategory;