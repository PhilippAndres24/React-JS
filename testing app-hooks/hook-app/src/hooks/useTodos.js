import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';



const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; //CON LA FUNCION INIT GUARDAMOS LOS CAMBIOS QUE FUERON MANDADOS POR EL INPUT FORM.
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        // console.log(todos);
        localStorage.setItem('todos', JSON.stringify(todos));       //ESTO VA DE LA MANITO CON useEffect.

    }, [todos])



    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo', //esto debe ser tal cual como se declaro en el switch case.
            payload: todo,
        }
        dispatch(action); //mandamos el reducer mediante el dispatch 
    }

    const handleDeleteTodo = (id) => {
        // console.log(id);
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        // console.log({id});
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,

    }

}
