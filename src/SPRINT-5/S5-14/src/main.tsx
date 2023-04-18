import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ToDoListProvider } from './providers/TodoContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToDoListProvider>
      <App />
    </ToDoListProvider>
  </React.StrictMode>,
)
