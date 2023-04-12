import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <GlobalContext.Provider value={{
            openMenu,
            setOpenMenu
        }}>
            {children}
        </GlobalContext.Provider>
    );
}