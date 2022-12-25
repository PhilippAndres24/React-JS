import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe('Pruebas en <TodoItem />', () => {
    const todo = {
        id: 1,
        descripcion: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());
    test('debe de mostrar el Todo pendiente de completar', () => {

        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)

        // const liElement = screen.getByRole('listitem')  

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
    });

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement);

        expect ( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );


    });

    test('el boton debe de llamar el deletTodo', () => {
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)

        const spanDeleteTodo = screen.getByLabelText('spanDelete');
        fireEvent.click(spanDeleteTodo);

        expect ( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );


    });

});