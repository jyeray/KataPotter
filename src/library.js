module.exports = function Library() {
    function buy(books) {
        return books.length * 8;
    }

    return {
        buy
    }
}