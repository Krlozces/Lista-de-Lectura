export default function Authors({ genres, isOpen, toggleDropdown, selectedAuthor, handleAuthorClick }) {
    return (
        <>
            <nav className='flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700'>
                <div className='relative block w-full'>
                    <div id="dropdownAuthors" className={`z-10 ${isOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownAuthors">
                                {genres.reduce((uniqueGenres, libro) => {
                                    if (!uniqueGenres.includes(libro.book.author)) {
                                        uniqueGenres.push(libro.book.author.name);
                                        return uniqueGenres;
                                    }
                                    return uniqueGenres;
                                }, []).map((uniqueGenre, index) => (
                                        <li className='block px-4 py-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-600 dark:hover:text-white' onClick={() => handleAuthorClick(uniqueGenre)} key={index}> 
                                            {uniqueGenre}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </nav>
        </>
    )
}