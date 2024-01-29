import {createContext, useState, useEffect} from 'react';
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [libros, setLibros] = useState([]);
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../books.json');
                const data = await response.json();
                setLibros(data.library);
            } catch (error) {
                console.error('Error al cargar los libros:', error);
            }
        };

        fetchData();
    }, []);

    return(
        <>
        <DataContext.Provider value={{ libros, setLibros }}>
            {children}
        </DataContext.Provider>
        </>
    )
}
