const sum = require('./sum');

test('adds 1 + 7 to equal 8', () => {
    expect(sum(1,7)).toBe(8);
});