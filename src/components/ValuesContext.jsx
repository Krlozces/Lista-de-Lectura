import { createContext, useState } from "react";

export const ValuesContext = createContext();

export const ValuesProvider = ({ children }) => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedAuthor, setSelectedAuthor] = useState('');

    return (
        <ValuesContext.Provider value={{ selectedGenre, setSelectedGenre, selectedAuthor, setSelectedAuthor }}>
            {children}
        </ValuesContext.Provider>
    );
}