// Action types
export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// Actions
export const createTodo = (todo) => ({
    type: CREATE_TODO,
    payload: todo
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
});


// Initial state
const initialState = {
    todos: [
        { id: 1, text: 'Todo item 1' },
        { id: 2, text: 'Todo item 2' }
    ]
};

// Reducer
export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TODO:
            state = {
                todos: [...state.todos, action.payload]
            };
            return state;
        case DELETE_TODO:
            state = {
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
            return state;
        default:
            return state;
    }
}