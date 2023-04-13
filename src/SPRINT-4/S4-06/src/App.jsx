import { useCallback, useState } from "react";
import { AppContainer, MainSection } from "./components/app.style";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";
import { Button } from "./components/button.style";

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  )

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
        <MainSection>
          <h1>You are in {currentTheme} mode</h1>
          <Button onClick={() => setCurrentTheme(getOpositeTheme())}>
            switch to {getOpositeTheme()} mode
          </Button>
        </MainSection>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
