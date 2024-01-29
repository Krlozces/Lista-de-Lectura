import { useContext } from 'react'
import { DataContext } from './DataContext'
import BookItemCart from './BookItemCart';
import { CounterContext } from './CounterContext';
import { ThemeContext } from './ThemeContext';
export default function CartList() {
    const {libros, setLibros} = useContext(DataContext);
    const { conteo, incrementar, decrementar } = useContext(CounterContext);
    const { isDarkMode } = useContext(ThemeContext);
    
    const removerItem = (id) => {
        setLibros(prevData => prevData.map(item => 
            item.book.ISBN === id ? { ...item, status: 'un-selected'} : item));
        decrementar();

        // Obtener la lista de libros seleccionados del localStorage
        const selectedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];

        // Filtrar el libro a ser removido
        const updatedBooks = selectedBooks.filter((book) => book.ISBN !== id);

        // Actualizar el localStorage con la nueva lista
        localStorage.setItem('selectedBooks', JSON.stringify(updatedBooks));
        console.log('Updated Cart in localStorage:', JSON.parse(localStorage.getItem('selectedBooks')) || []);
    }

    const filteredItems = libros.filter( item => item.status === 'selected');
    
    return (
        <div className={`col-md-3 border-start border-4 ${isDarkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-secondary bg-white text-gray-800'} my-4 flex flex-wrap justify-center flex-col p-4 sm:w-full md:w-full`}>
            <div>
                <h2 className={`font-bold text-center border-b ${isDarkMode ? 'border-sky-700' : 'border-sky-500'} pb-2`}>LISTA DE LECTURA</h2>
            </div>
                <div className='flex justify-evenly flex-wrap mt-5 gap-4'>
                    {filteredItems.map(libro => (
                        <BookItemCart key={libro.book.ISBN} libro={libro} onClick={ ()=>{ removerItem(libro.book.ISBN) } }/>
                    ))}
                </div>
        </div>
    )
}
