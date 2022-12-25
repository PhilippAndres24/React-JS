const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}]


const todoReducer = (state = initialState, action = {}) => { //esto es un reducer- con el action se cambia el estado.

    if (action.type === '[TODO] add todo') {
        return [...state, action.agregar];
    }

    return state;
}




let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'recolectar la piedra del poder',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    agregar: newTodo,
}

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos })