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
        const booksGroupedById = groupBooksById(books)
        let totalAmount = 0;
        while (thereIsAnyBookIn(booksGroupedById)) {
            let differentBooks = getDifferentBooksForDiscount(booksGroupedById)
            totalAmount += differentBooks * 8 * (1 - getDiscountFor(differentBooks))
        }
        return totalAmount;
    }

    function groupBooksById(books) {
        return books.reduce((acc, book) => {
            const id = book.id;
            const value = acc[id] || 0
            acc[id] = value + 1;
            return acc;
        }, []);
    }

    function thereIsAnyBookIn(booksGroupedById) {
        return booksGroupedById.filter(x => x > 0).length > 0
    }

    function getDifferentBooksForDiscount(booksGroupedById) {
        let differentBooks = 0;
        Object.keys(booksGroupedById).forEach(bookId => {
            if (booksGroupedById[bookId] > 0) {
                differentBooks++;
                booksGroupedById[bookId] = booksGroupedById[bookId] - 1;
            }
        });
        return differentBooks;
    }

    function getDiscountFor(numberOfBooks) {
        return discountsForBooks[numberOfBooks];
    }

    return {
        buy
    }
}
