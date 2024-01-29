export const filter = (libros, genreValue = '', authorValue = '') => {
    if(genreValue && authorValue){
        return libros.filter((l) => l.book.genre === genreValue && l.book.author.name === authorValue);
    }else if(genreValue){
        return libros.filter((l) => l.book.genre === genreValue );
    }else if(authorValue){
        return libros.filter((l) => l.book.author.name === authorValue);
    }else{
        return libros;
    }
};
// return genreValue ? libros.filter(libro => libro.book.genre === genreValue): libros;