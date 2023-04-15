import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
    const [openMenu, setOpenMenu] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] =useState('');
    const [message, setMessage] = useState('');

    return (
        <GlobalContext.Provider value={{
            openMenu,
            setOpenMenu,
            name,
            setName,
            email,
            setEmail,
            message, setMessage
        }}>
            {children}
        </GlobalContext.Provider>
    );
}