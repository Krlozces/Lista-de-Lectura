import { Link } from 'react-router-dom';

export default function BookItemCart({ libro , onClick }) {
    return (
        <>
        <div className='flex flex-wrap justify-evenly gap-4'>
            <div className="p-2 border border-sky-700 rounded shadow-lg"> 
                {/* Arreglar el Link */}
                {/* <Link to={'/book-selected/' + libro.book.ISBN}> */}
                    <div className='h-72 w-48 lg:h-80 lg:w-60 lg:rounded-lg flex-none bg-cover rounded-t overflow-hidden' style={{ backgroundImage:`url(${libro.book.cover})` }} title={libro.book.title}>
                    </div>
                {/* </Link> */}
                <button className='bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow my-2' type="button" onClick={onClick}>
                    Remover
                </button>
            </div>
        </div>
        </>
    )
}
