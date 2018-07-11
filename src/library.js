module.exports = function Library() {
    function buy(books) {        
        return books.length * 8 * (1 - getDiscount(books));
    }
    
    function getDiscount(books) {
        const numberOfBooks = books.reduce((acc, book) => {
            const id = book.id;
            acc[id] = acc.id + 1;
            return acc;
        }, {});
        return (Object.keys(numberOfBooks).length - 1) * 0.05;
    }
    
    return {
        buy
    }
}


