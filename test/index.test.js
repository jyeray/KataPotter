import Book from '../src/book'
import Library from '../src/library'

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

    describe('test from kata', () => {
        it('with several discounts', () => {
            expect(Library().buy([Book(1), Book(1), Book(2)])).toBe(23.2);
            expect(Library().buy([Book(1), Book(1), Book(2), Book(2)])).toBe(30.4);
            expect(Library().buy([Book(1), Book(1), Book(2), Book(2), Book(3), Book(4)])).toBe(40.8);
            expect(Library().buy([Book(1), Book(5), Book(2), Book(2), Book(3), Book(4)])).toBe(38);
        })

        it('edge cases', () => {
            expect(Library().buy([Book(0), Book(0), Book(1), Book(1), Book(2), Book(2), Book(3), Book(4)])).toBe(51.2);
            expect(Library().buy([
                Book(0), Book(0), Book(0), Book(0), Book(0),
                Book(1), Book(1), Book(1), Book(1), Book(1),
                Book(2), Book(2), Book(2), Book(2),
                Book(3), Book(3), Book(3), Book(3), Book(3),
                Book(4), Book(4), Book(4), Book(4)
            ])).toBe(141.2);
        })
    })
})
