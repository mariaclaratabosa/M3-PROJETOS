import './App.css'
import Card from './components/Developer'

function App() {

  return (
    <div className='div__style'>
      <Card name="Gabriel" age="19" country="Brasil" />
      <Card name="Filipe" age="28" country="Brasil" />
      <Card name="Mariana" age="24" country="Itália" />
    </div>
  )
}

export default App
