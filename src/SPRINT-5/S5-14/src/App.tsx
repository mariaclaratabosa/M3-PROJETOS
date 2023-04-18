import { useState } from 'react'
import './App.css'
import { ToDoList } from './components/TodoList'
import { Form } from './components/Form'

function App() {

  return (
    <div className="App">
      <h1>ToDo List</h1>
        <Form />
        <ToDoList />
    </div>
  )
}

export default App
