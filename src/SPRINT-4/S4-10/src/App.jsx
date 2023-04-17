
import { GlobalStyles } from './styles/GlobalStyles'
import { RoutesMain } from './routes'
import { UserProvider } from './providers/UserContext'
import { TechContext, TechProvider } from './providers/TechContext'

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <UserProvider>
        <TechProvider>
          <RoutesMain />
        </TechProvider>
      </UserProvider>
    </div>
  )
}

export default App
