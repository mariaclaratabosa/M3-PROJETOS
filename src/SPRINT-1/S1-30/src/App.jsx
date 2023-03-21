import { useState } from 'react'
import './App.css'
import RestrictedPage from './components/Restricted'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const user = "Maria Clara"

  const handdleLogin = () => {
    setIsLoggedIn(true)
  }

  const handdleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
   <div>
    <RestrictedPage 
    isLoggedIn={isLoggedIn}
    user={user}
    Login={handdleLogin}
    Logout={handdleLogout}
    />
   </div>
  )
}

export default App
