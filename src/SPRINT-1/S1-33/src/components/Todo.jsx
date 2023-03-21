function TodoList({ todos, handleTodo}){
    return (
        <ul>
            {todos.map(todo => {
                return (
                <li key={todo}>
                    {todo}
                    <button onClick={() => handleTodo(todo)}>Concluir</button>
                </li>
                )
            })}
        </ul>
    )
}

export default TodoList