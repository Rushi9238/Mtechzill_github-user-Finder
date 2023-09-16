import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [userName,setUserName]=useState('')
  const [userFound,setUserFound]=useState(false)

  return (
    <ThemeContext.Provider value={{ theme, setTheme,userName,setUserName,userFound,setUserFound }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;