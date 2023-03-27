import { useEffect, useState } from 'react'
import './App.css'
import Characters from './components/Characters/Characters'

function App() {
  const [charactersList, setCharactersList] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => setCharactersList(data.results))
    .catch((error) => console.log(error))
  }, [])
  return (
    <div className="App">
      <Characters charactersList={charactersList} />
    </div>
  )
}

export default App
