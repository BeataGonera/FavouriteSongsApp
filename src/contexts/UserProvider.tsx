import { createContext, ReactElement, FC, useState } from 'react';

interface UserContextState {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    songs: string[];
    setSongs: (songs: string[]) => void;
}

interface UserProviderProps {
    children: ReactElement;
}

const defaultUserContextValue = {} as UserContextState;
export const UserContext = createContext(defaultUserContextValue);

export const UserProvider: FC<UserProviderProps> =({children}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [songs, setSongs] = useState([''])

    return (
        <UserContext.Provider value={{email, setEmail, password, setPassword, songs, setSongs}}>
            {children}
        </UserContext.Provider>
    )
}