import { useState } from 'react'
import './App.css'
import ItemCard from './components/ItemCard'

function App() {
  const [cart, setCart] = useState([
    {
      name: "Morango",
      price: 15,
      category: "Frutas",
    },
    {
      name: "Uva",
      price: 23,
      category: "Frutas",
    },
    {
      name: "Banana",
      price: 23,
      category: "Frutas",
    },
    {
      name: "Beterraba",
      price: 5,
      category: "Legumes",
    },
  ])

  const total = cart.reduce((previousValue, currentItem) => {
    return previousValue + currentItem.price
  }, 0)

  const filteredFruits = cart.filter(item => item.category === "Frutas")
  const filteredVegetables = cart.filter(item => item.category === "Legumes")

  const addItem = () => {
    const newItem = {
      name: "Brócolis",
      price: 10,
      category: "Legumes"
    }
    setCart([...cart, newItem])
  }

  return (
    <div>
      <button onClick={() => addItem()}>Adicionar item</button>
      <ul>
        {cart.map(item => <ItemCard key={item.name} item={item} />)}
      </ul>
      <span>Total: {total}</span>
      <div>
        <h2>Frutas:</h2>
        <ul>
          {filteredFruits.map(item => <ItemCard key={item.name} item={item} />)}
        </ul>
      </div>
      <div>
        <h2>Legumes:</h2>
        <ul>
          {filteredVegetables.map(item => <ItemCard key={item.name} item={item} />)}
        </ul>
      </div>
    </div>
  )
}

export default App
