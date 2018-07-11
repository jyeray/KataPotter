const Library = require("../src/library")
const Book = require("../src/book")

describe('library', () => {

    it('when you buy zero books', () => {
        expect(Library().buy([])).toBe(0);
    });
    it('when you buy one book', () => {
        expect(Library().buy([Book()])).toBe(8);
    });
}) 
