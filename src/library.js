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

        let totalAmount = 0;
        let booksWithDiscount

        while (Object.values(booksGroupedById).filter(x => x > 0).length > 0) {
            booksWithDiscount = 0;
            Object.keys(booksGroupedById).forEach(bookId => {
                if (booksGroupedById[bookId] > 0) {
                    booksWithDiscount++;
                    booksGroupedById[bookId] = booksGroupedById[bookId] - 1;
                }
            });
            totalAmount += booksWithDiscount * 8 * (1 - discountsForBooks[booksWithDiscount])
        }
        return totalAmount;
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
