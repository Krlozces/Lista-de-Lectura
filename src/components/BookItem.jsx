import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";
import { useContext, useEffect, useMemo, useRef } from "react";
import { CounterContext } from "./CounterContext";
import { ValuesContext } from "./ValuesContext";
import { filter } from "./Filter";
import { filterPer } from "./FilterPagesYear";
import { PagesYearContext } from "./PagesYearContext";
import { ThemeContext } from "./ThemeContext";

export default function BookItem() {
    const { libros, setLibros } = useContext(DataContext);
    const { conteo, incrementar, decrementar } = useContext(CounterContext);
    const { selectedGenre, setSelectedGenre, selectedAuthor, setSelectedAuthor } = useContext(ValuesContext);
    const { year, pages, setYear, setPages } = useContext(PagesYearContext);
    const { isDarkMode } = useContext(ThemeContext);

    const forceUpdate = useRef(false);
    const manejarClick = (id) => {
        setLibros( prevData => prevData.map(item => 
            item.book.ISBN === id ? { ...item, status: 'selected' } : item
        ));
        incrementar();
        // Obtener la lista de libros seleccionados del localStorage
        const selectedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];

        // Verificar si el libro ya está en la lista
        const existingBook = selectedBooks.find((book) => book.ISBN === id);

        if (!existingBook) {
            // Si el libro no está en la lista, agregarlo
            selectedBooks.push({ ISBN: id });
            // Actualizar el localStorage con la nueva lista
            localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
        }
        forceUpdate.current = true;
        console.log('Updated Cart:', libros);
    }

    useEffect(() => {
        if (forceUpdate.current) {
            forceUpdate.current = false;
        }
    }, [libros, forceUpdate]);

    const librosFiltrados = useMemo(() => {
        let filtrados = [];

        if (selectedGenre || selectedAuthor) {
            filtrados = filter(libros, selectedGenre, selectedAuthor);
        } else if (year || pages && (year !== 0 || pages !== 0)) {
            filtrados = filterPer(libros, year, pages);
        }

        return filtrados;
    }, [libros, selectedGenre, selectedAuthor, year, pages]);

    useEffect(() => {
        // Obtener la lista de libros seleccionados del localStorage
        const selectedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];
        console.log('Selected Books from localStorage:', selectedBooks);
    
        // Actualizar el estado de los libros según la lista obtenida
        setLibros((prevData) =>
            prevData.map((item) => ({
                ...item,
                status: selectedBooks.some((book) => book.ISBN === item.book.ISBN)
                    ? 'selected'
                    : item.status,
            }))
        );
    }, [setLibros]);
    
    useEffect(() => {
        if (librosFiltrados.length === 0) {
            setSelectedGenre('');
            setSelectedAuthor('');
            setYear('');
            setPages('');
        }
    }, [librosFiltrados.length, setSelectedGenre, setSelectedAuthor, setYear, setPages]);

    return (
        <>  
            {librosFiltrados.length === 0 ? (<div className={`flex flex-wrap justify-evenly gap-4 ${isDarkMode ? 'sm:flex-col md:flex-row lg:flex-row xl:flex-row text-white' : ''}`}>
                        {libros.map( libro => (
                            libro.status !== 'selected' && (<div className={`p-2 border ${isDarkMode ? 'border-blue-gray-500' : 'border-sky-700'} rounded shadow-lg`} key={libro.book.ISBN}>
                                <Link to={'/book/' + libro.book.ISBN} key={libro.book.ISBN}>
                                    <div className='h-72 w-48 lg:h-80 lg:w-60 lg:rounded-lg flex-none bg-cover rounded-t overflow-hidden' style={{ backgroundImage:`url(${libro.book.cover})` }} title={libro.book.title}>
                                    </div>
                                </Link>
                                <button className='bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow my-2' type="button" onClick={() => { manejarClick(libro.book.ISBN) }}>
                                    Add to List
                                </button>
                            </div>)
                        ))}
                    </div>) : (
                    <div className={`flex flex-wrap justify-evenly gap-4 ${isDarkMode ? 'sm:flex-col md:flex-row lg:flex-row xl:flex-row text-white' : ''}`}>
                        {librosFiltrados.map( libro => (
                            libro.status !== 'selected' && (<div className={`p-2 border ${isDarkMode ? 'border-blue-gray-500' : 'border-sky-700'} rounded shadow-lg`} key={libro.book.ISBN}>
                                <Link to={'/book/' + libro.book.ISBN} key={libro.book.ISBN}>
                                    <div className='h-72 w-48 lg:h-80 lg:w-60 lg:rounded-lg flex-none bg-cover rounded-t overflow-hidden' style={{ backgroundImage:`url(${libro.book.cover})` }} title={libro.book.title}>
                                    </div>
                                </Link>
                                <button className={`bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} rounded shadow my-2 sm:w-full md:w-auto lg:w-auto xl:w-auto`} type="button" onClick={() => { manejarClick(libro.book.ISBN) }}>
                                    Add to List
                                </button>
                            </div>)
                        ))}
                    </div>
            )}
        </>
    )
}
