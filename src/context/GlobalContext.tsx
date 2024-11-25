import React, {createContext, useContext, useState} from "react";

interface GlobalContextProps {
  isFullScreen: boolean;
  setFullScreen: (value: boolean) => void;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                          children,
                                                                        }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const setFullScreen = (value: boolean) => {
    setIsFullScreen(value);
  };

  return (
    <GlobalContext.Provider value={{isFullScreen, setFullScreen}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
