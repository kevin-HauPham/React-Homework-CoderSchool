import { useContext, createContext, useState } from "react";

const InputContext = createContext();
function InputProvider({ children }) {
  const [login, setLogin] = useState(false);

  return (
    <InputContext.Provider value={[login, setLogin]}>
      {children}
    </InputContext.Provider>
  );
}

export { InputContext, InputProvider };
