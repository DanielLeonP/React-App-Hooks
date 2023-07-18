export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case '[TODO] Add Todo':

            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, done: !todo.done }
                }
                return todo;
            });

        case 'NoImplementado'://Cuando se tiene una accion que no se a implementado
            // Recomendable saltar un error para poder identificarlo y darnos cuenta
            throw new Error('Aun no se a implementado el case');
        default:
            return initialState;
    }
}