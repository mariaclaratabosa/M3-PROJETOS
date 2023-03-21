import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleTodo = (itemToRemove) => {
    const filteredTodos = todos.filter(todo => todo !== itemToRemove)
    setTodos(filteredTodos)
  }
  
  return (
    <div>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} handleTodo={handleTodo}/>
    </div>
  )
}

export default App
