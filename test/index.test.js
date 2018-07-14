const Library = require("../src/library")
const Book = require("../src/book")

describe('library', () => {

    it('when you buy zero books', () => {
        expect(Library().buy([])).toBe(0);
    });

    it('when you buy one book', () => {
        expect(Library().buy([Book(1)])).toBe(8);
    });

    it('when you buy two identical books', () => {
        expect(Library().buy([Book(1), Book(1)])).toBe(16);
    });

    it('when you buy two different books', () => {
        expect(Library().buy([Book(1), Book(2)])).toBe(15.2);
    });

    it('when you buy three different books', () => {
        expect(Library().buy([Book(1), Book(2), Book(4)])).toBe(21.6);
    });

    it('when you buy four different books', () => {
        expect(Library().buy([Book(1), Book(2), Book(4), Book(5)])).toBe(25.6);
    });

    it('when you buy five different books', () => {
        expect(Library().buy([Book(1), Book(2), Book(3), Book(4), Book(5)])).toBe(30);
    });

    it('when you buy three different books and one equal', () => {
        expect(Library().buy([Book(1), Book(2), Book(3), Book(3)])).toBe(29.6);
    });

    it('when you buy two different books two times', () => {
        expect(Library().buy([Book(1), Book(2), Book(1), Book(2)])).toBe(30.4);
    });
})

