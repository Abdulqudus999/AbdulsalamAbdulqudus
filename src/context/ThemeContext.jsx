import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children}) => {
  const [darkMode, setdarkMode] = useState(() => JSON.parse(localStorage.getItem('darkMode')) || false)
  useEffect(() => {
    const root = document.documentElement
    darkMode ? root.classList.add('dark') : root.classList.remove('dark')
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => setdarkMode((prev) => !prev)
  return <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)