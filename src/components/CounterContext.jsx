import React, { createContext, useState } from 'react'
export const CounterContext = createContext();

export const CounterProvider = ( {children} ) => {
    const [conteo, setConteo] = useState(0);

    const incrementar = () => {
        setConteo((prevConteo) => prevConteo + 1);
    }  

    const decrementar = () => {
        setConteo((prevConteo) => prevConteo -1);
    }

    return (
        <>
            <CounterContext.Provider value={{ conteo, incrementar, decrementar }}>
                {children}
            </CounterContext.Provider>
        </>
    )
}
