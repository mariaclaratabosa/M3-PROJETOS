import { useEffect, useState } from 'react'
import './App.css'
import { api } from './services/api';
import { AxiosError } from 'axios';
import { FruitList } from './components/FruitList';

export interface IFruit{
  id: number;
  name: string;
  category: string;
  price: number;
}

function App() {

  const [fruitList, setFruitList] = useState<IFruit[]>([])

  useEffect(() => {
    const loadFruits = async () => {
      try {
        const response = await api.get<IFruit[]>('/fruits')
        setFruitList(response.data)
      } catch (error) {
        const currentError = error as AxiosError<string>
        console.log(currentError)
      }
    }
    loadFruits()
  }, [])

  return (
    <div className="App">
        <FruitList fruitList={fruitList}/>
    </div>
  )
}

export default App
