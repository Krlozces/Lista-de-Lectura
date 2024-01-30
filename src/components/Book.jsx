
export default function Book({ book }) {
    return (
        <div className='max-w-sm w-full lg:max-w-lg lg:flex my-10'>
            <div className='h-64 lg:h-auto lg:w-48 flex-none bg-cover w-full rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-l border-t border-b border-gray-400' style={{ backgroundImage:`url(${book.cover})` }} title={book.title}>
            </div>
            <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-2xl'> 
                <h2 className='text-center text-sky-600 font-extrabold'>{book.title}</h2>
                <p className='text-gray-700 text-base'><span className='font-bold'>Pages: </span>{book.pages}</p>
                <p className='text-gray-700 text-base'><span className='font-bold'>Genre: </span>{book.genre}</p>
                <p className='text-gray-700 text-base'><span className='font-bold'>Synopsis: </span>{book.synopsis}</p>
                <p className='text-gray-700 text-base'><span className='font-bold'>Year: </span>{book.year}</p>
                <p className='text-gray-700 text-base'><span className='font-bold'>ISBN: </span>{book.ISBN}</p>
                <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Author: </span>{book.author.name}
                </p>
                <button className='bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow'>
                    Add to cart
                </button>
            </div>
        </div>
    )
}
