import Aside from './Aside';
import HorizontalBar from './HorizontalBar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import BookItem from './BookItem';
import Books from './Books';
export default function ListBooks() {
    return (
        <>
            <h1 className='font-extrabold font-mono text-4xl text-slate-600'>Books</h1>
            <HorizontalBar />
            <div className='flex gap-4'>
                <Aside />
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<BookItem />}/>
                            <Route path='/book/:nombreParam' element={<Books />}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </>
    );
}
