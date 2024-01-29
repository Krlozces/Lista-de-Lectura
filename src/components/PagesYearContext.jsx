import { createContext, useState } from "react";

export const PagesYearContext = createContext();

export const PagesYearProvider = ({ children }) => {
    const [year, setYear] = useState(0);
    const [pages, setPages] = useState(0);

    return (
        <PagesYearContext.Provider value={{ year, pages, setYear, setPages }}>
            {children}
        </PagesYearContext.Provider>
    )
}