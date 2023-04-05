import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Costumer from './pages/Costumer';
import Company from './pages/Company';
import { members } from './data/members'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home members={members} />} />
        <Route path="/costumer/:id" element={<Costumer members={members} />} />
        <Route path="/company/:id" element={<Company members={members} />} />
      </Routes>
    </div>
  )
}

export default App
