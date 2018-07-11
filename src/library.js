module.exports = function Library() {
    const discountsForBooks = {
        0: 0,
        1: 0,
        2: 0.05,
        3: 0.10,
        4: 0.2,
        5: 0.25
    }
    function buy(books) {
        const booksGroupedById = books.reduce((acc, book) => {
            const id = book.id;
            const value = acc[id] || 0
            acc[id] = value + 1;
            return acc;
        }, {});

        return getNumberOfDiferentBooks(booksGroupedById) * 8 * (1 - getDiferentBooksDiscount(booksGroupedById)) + 
        (books.length - getNumberOfDiferentBooks(booksGroupedById)) * 8;
    }
    
    function getDiferentBooksDiscount(booksGroupedById) {
        return discountsForBooks[getNumberOfDiferentBooks(booksGroupedById)];
    }

    function getNumberOfDiferentBooks(booksGroupedById){
        return Object.keys(booksGroupedById).length;
    }
    
    return {
        buy
    }
}
