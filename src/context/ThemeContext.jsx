import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();
export const ThemeContextUpdate = createContext();

export function useThemeContext(){
return  useContext(ThemeContext)
}

export function useThemeContextUpdate(){
  return useContext(ThemeContextUpdate)
}

export const ThemeProvider = ({ children }) => {
  const [age, setAge] = useState(31);

  const updateAge = () => {
    setAge((prevState) => prevState + 1);
  };
  return (
    <ThemeContext.Provider value={{ name: "Rawendra", age: age }}>
      <ThemeContextUpdate.Provider value={{updateAge}}>
        {children}
      </ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  );
};
