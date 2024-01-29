export default function BookShelf({ books, isOpen, toggleDropdown }) {
    
    return (
        // Manejar que solo se agreguen los que están seleccionados en el dropdown de categorías.
        <>
            <nav className='flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700'>
                <div className='relative block w-full'>
                    <div className={`z-10 ${isOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                {books.map((libro) => {
                                <li className='block px-4 py-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-600 dark:hover:text-white' key={libro.book.ISBN}> 
                                    {libro.book.title}
                                </li>
                                })}
                            </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}