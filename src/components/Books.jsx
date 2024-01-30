import { useContext } from 'react';
import {useParams} from 'react-router-dom';
import Book from './Book';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';
export default function Books() {
    const params = useParams();
    const {libros, setLibros} = useContext(DataContext);
    const navegar = useNavigate();

    const manejarNavegacion = () => {
        navegar('/');
    }

    return (
        <div className='flex flex-col mx-4 lg:mx-40'>
            <div className='flex justify-between mt-4 mb-8 lg:mb-12'>
                <button className='flex bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={manejarNavegacion}> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
                    </svg>Regresar
                </button>
            </div>
            <h1 className='font-bold lg:font-extrabold text-center text-base lg:text-lg text-slate-500 mb-4'>{params.nombreParam}</h1>
            {libros.length === 0 ? (<p>No hay libros disponibles</p>) : (
                    <div className=''>
                        {libros.filter(libro => libro.book.ISBN === params.nombreParam)
                        .map(libro => (
                            <Book key={libro.book.ISBN} book={libro.book} />
                        ))}
                    </div>
            )}
        </div>
    )
}
