
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Home';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/dashboard/:userId" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
