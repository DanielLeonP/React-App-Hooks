import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from '../hooks/useTodos';



export const TodoApp = () => {
    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();
    return (
        <>
            <h1>Todo App:{todosCount}, <small>pendientes:{pendingTodosCount}</small></h1>{/* {todos.length}    {todos.filter(todo=>!todo.done).length}*/}
            <div className="row">

                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}// id => handleDeleteTodo(id)
                        onToggleTodo={handleToggleTodo}
                    />

                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>

        </>
    )
}
