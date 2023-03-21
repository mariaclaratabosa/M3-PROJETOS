import { useState } from 'react'
import './App.css'
import WelcomePage from './components/Welcome'
import GetUserComponent from './components/GetComponent'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState("")

  return (
    <div>
      {isLoggedIn ? (
        <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn}/>
      ) : (
        <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  )
}

export default App
