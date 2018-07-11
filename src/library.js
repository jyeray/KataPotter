module.exports = function Library() {
    function buy(books) {

        if(books.length == 2) {
            if(books[0].id === books[1].id) {
                return (books.length * 8) * 0.95;
            }
        }
        return books.length * 8;
    }
    
    
    
    return {
        buy
    }
    
}


