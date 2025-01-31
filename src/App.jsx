import { createContext, useContext, useEffect, useState } from 'react'

import './App.css'

const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
}

const ThemeContext = createContext({ theme: THEME.LIGHT, setTheme: (state) => {} })

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || THEME.LIGHT
  })

  useEffect(() => {
    //로컬스토리지 저장
    localStorage.setItem('theme', theme)
    document.body.className = theme
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleTheme = () => {
    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
  }

  return (
    <button onClick={handleTheme}>{theme === THEME.LIGHT ? '다크모드' : '라이트모드드'}</button>
  )
}

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <div>
          <h3>테마 변경 확인</h3>
          <ThemeButton />
          <ThemeContext.Consumer>{({ theme }) => <div>{theme}</div>}</ThemeContext.Consumer>
        </div>
      </ThemeContextProvider>
    </div>
  )
}

export default App
