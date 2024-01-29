import { useContext } from 'react'
import Counter from './Counter';
import { DataContext } from './DataContext';
import { PagesYearContext, PagesYearProvider } from './PagesYearContext';
import ToggleThemeButton from './ToggleThemeButton';

export default function HorizontalBar() {
    const { libros, setLibros } = useContext(DataContext);

    const { year, pages, setYear, setPages } = useContext(PagesYearContext);

    return (
        <PagesYearProvider>
        <div>
            <h2 className='font-extrabold font-mono text-xl border-b-4 text-center mb-4'>EXPLORE BOOKS</h2>
            <div className='flex flex-col md:flex-row items-center my-4 mx-auto max-w-screen-xl'>
                <div className='mb-2 md:mb-0 md:mr-4 w-full md:w-1/3'>
                    <label htmlFor="yearSelect"></label>
                    <select name="yearSelect" id="yearSelect" className="bg-transparent text-gray-500 text-sm focus:ring-blue-500 block w-full p-2 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" onChange={e => setYear(e.target.value)} value={year}>
                        <option value='' disabled selected>Year</option>
                        {libros.map(libro => (
                            <option value={libro.book.year} key={libro.book.ISBN}>{libro.book.year}</option>
                        ))}
                    </select>
                </div>
                <div className='mb-2 md:mb-0 md:mr-4 w-full md:w-1/3'>
                    <label htmlFor="pagesSelect"></label>
                    <select name="pageSelect" id="pagesSelect" className='bg-transparent text-gray-500 text-sm focus:ring-blue-500 block w-full p-2 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500' onChange={e => setPages(e.target.value)} value={pages}>
                        <option value='' disabled selected> Pages </option>
                        {libros.map(libro => (
                            <option value={libro.book.pages} key={libro.book.ISBN}>{libro.book.pages}</option>
                        ))}
                    </select>
                </div>
                <div className='w-full md:w-1/3 flex items-center'>
                    <div className="relative h-10 w-full min-w-[200px]">
                        <label htmlFor="search">
                            <input type="text" id='search'
                            className="peer h-full w-full bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border disabled:border-0 disabled:bg-blue-gray-50 focus:border-b-2 focus:border-sky-300"
                            placeholder="Search"/>
                        </label>
                    </div>
                    <button className='bg-emerald-400 mx-4 p-2' type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                        </svg>
                    </button>
                </div>  
                <div className='mt-4 md:mt-0 md:ml-4 flex justify-evenly w-2/4'>
                    <Counter />
                    <ToggleThemeButton />
                </div>
            </div>
        </div>
        </PagesYearProvider>
    )
}
