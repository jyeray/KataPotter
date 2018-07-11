module.exports = function Library() {
    function buy(books) {        
        return books.length * 8 * getDiscount(books);
    }
    
    const getDiscount = books => books.length == 2 && books[0].id === books[1].id ? 0.95 : 1
    
    
    return {
        buy
    }
    
}


