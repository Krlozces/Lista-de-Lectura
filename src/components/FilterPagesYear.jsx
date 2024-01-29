export const filterPer = (libros, year = '', pages = '') => {
    if(year !== '' && pages !== ''){
        return libros.filter(libro => libro.book.pages === parseInt(pages) && libro.book.year === parseInt(year));
    }else if(pages !== ''){
        return libros.filter(libro => libro.book.pages === parseInt(pages));
    }else if(year !== ''){
        return libros.filter(libro => libro.book.year === parseInt(year));
    }else{
        return libros;
    }
}