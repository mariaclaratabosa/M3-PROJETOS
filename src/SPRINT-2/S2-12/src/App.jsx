import { useEffect, useState } from 'react'
import './App.css'
import { api } from './services/api'
import Characters from './components/Characters/Characters'

function App() {
  const [charactersList, setCharactersList] = useState([])
  const [currentPage, setCurrentPage] = useState('https://rickandmortyapi.com/api/character/')
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        const response = await api.get(currentPage)
        setCharactersList(response.data.results)
        setPrevPage(response.data.info.prev)
        setNextPage(response.data.info.next)
      } catch (error) {
        console.log(error)
      }
    }
    loadCharacter()
  }, [currentPage])

  const handleNextPage = () => {
    if(nextPage) {
      setCurrentPage(nextPage)
    }
  }

  const handlePrevPage = () => {
    if(prevPage) {
      setCurrentPage(prevPage)
    }
  }

  return (
    <div className="App">
      <Characters charactersList={charactersList}/>
      <div>
      <div>
            <button onClick={handlePrevPage}>Anterior</button>
            <button onClick={handleNextPage}>Próxima</button>
        </div>
      </div>
    </div>
  )
}

export default App
