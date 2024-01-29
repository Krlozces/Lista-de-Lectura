import {useState, useEffect, useContext} from 'react';
import NavBar from './NavBar';
import Search from './Search';
import DropdownButton from './DropdownButton';
import Authors from './Authors';
import { ValuesProvider, ValuesContext } from './ValuesContext';
import BookShelf from './BookShelf';
import { ThemeContext } from './ThemeContext';

export default function Aside() {
    const [libros, setLibros] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAuthorsDropdownOpen, setIsAuthorsDropdownOpen] = useState(false);
    const [isBookShelfDropdownOpen, setBookShelfDropdownOpen] = useState(false);
    const { selectedGenre, setSelectedGenre, selectedAuthor, setSelectedAuthor } = useContext(ValuesContext);
    const { isDarkMode } = useContext(ThemeContext);

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
        // toggleDropdown();
    };

    const handleAuthorClick = (author) => {
        setSelectedAuthor(author);
    };

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

    return (
        <>
        <ValuesProvider>
            <div className={`w-[20rem] max-sm:hidden rounded-xl ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white'} p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5 relative`}>
                <div className='flex items-center gap-4 p-4 mb-2'>
                    <h5 className={`block font-sans text-xl antialiased font-semibold leading-snug tracking-normal ${isDarkMode ? 'text-sky-300' : 'text-blue-gray-900'}`}>
                        BROWSE
                    </h5>
                </div>
                <Search />
    
                <DropdownButton label="GENRES" isOpen={isDropdownOpen} toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)} />
                <NavBar genres={libros} isOpen={isDropdownOpen} toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)} selectedGenre={selectedGenre} handleGenreClick={handleGenreClick}/>

                <DropdownButton label="AUTHORS" isOpen={isAuthorsDropdownOpen} toggleDropdown={() => setIsAuthorsDropdownOpen(!isAuthorsDropdownOpen)} />
                <Authors genres={libros} isOpen={isAuthorsDropdownOpen} toggleDropdown={() => setIsAuthorsDropdownOpen(!isAuthorsDropdownOpen)} setSelectedAuthor={selectedAuthor} handleAuthorClick={handleAuthorClick}/>
                
                <DropdownButton label="MOST READ" isOpen={isDropdownOpen} toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)} />

                <DropdownButton label="POPULAR" isOpen={isDropdownOpen} toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)} />

                <DropdownButton label="BOOK OF THE YEAR" isOpen={isDropdownOpen} toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)} />

                <DropdownButton label="NOBEL PRIZE WINNER" isOpen={isDropdownOpen} toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)} />

                <DropdownButton label="NEW RELEASES" isOpen={isDropdownOpen} toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)} />

                <DropdownButton label="AWARD WINNERS" isOpen={isDropdownOpen} toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)} />

                <DropdownButton label="GIVEAWAYS" isOpen={isDropdownOpen} toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)} />

                <DropdownButton label="RANDOM BOOKS" isOpen={isDropdownOpen} toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)} />

                <DropdownButton label="RECOMMENDATION" isOpen={isDropdownOpen} toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)} />

                <DropdownButton label="BOOKSHELF" isOpen={isDropdownOpen} toggleDropdown={() => setBookShelfDropdownOpen(!isBookShelfDropdownOpen)} />
                <BookShelf books={libros} isOpen={isBookShelfDropdownOpen} toggleDropdown={() => (setBookShelfDropdownOpen(!isBookShelfDropdownOpen))}/>
            </div>
            </ValuesProvider>
            </>
    )
}
