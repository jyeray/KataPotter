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
        return books.length * 8 * (1 - getDiscount(books));
    }
    
    function getDiscount(books) {
        const numberOfBooks = books.reduce((acc, book) => {
            const id = book.id;
            acc[id] = acc.id + 1;
            return acc;
        }, {});
        return discountsForBooks[Object.keys(numberOfBooks).length];
    }
    
    return {
        buy
    }
}
