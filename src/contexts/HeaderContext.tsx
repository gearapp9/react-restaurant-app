import { createContext, useState, useEffect } from "react";

type ContextProp = {
  children: React.ReactNode;
};

type HeaderContextType = {
  headerType: string;
  changeHeader: (type: string) => void;
};

export const HeaderContext = createContext<HeaderContextType>(
  {} as HeaderContextType
);

export const HeaderProvider = ({ children }: ContextProp) => {
  const [headerType, setHeaderType] = useState("");
  

  const changeHeader = (type: string) => {
    //using use effect prevent from getting weird error
    useEffect(() => {
      setHeaderType(type);
    }, []);
  };
  const value = { headerType, changeHeader };
  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};
