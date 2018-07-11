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
        
        if(Object.keys(numberOfBooks).length === 4) return 0.2;
        if(Object.keys(numberOfBooks).length === 3) return 0.10;
        if(Object.keys(numberOfBooks).length === 2) return 0.05;
        if(Object.keys(numberOfBooks).length === 1) return 0;
        return 0
    }
    
    return {
        buy
    }
}


