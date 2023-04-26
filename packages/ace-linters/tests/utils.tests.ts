import {checkValueAgainstRegexpArray, mergeObjects} from "../utils";
import {assert, expect} from "chai";

describe('mergeObjects', () => {
    it('should merge two objects with priority to first object values', () => {
        const obj1 = { a: 1, b: { c: 3, d: 4 } };
        const obj2 = { b: { c: 5, e: 6 }, f: 7 };
        const expected = { a: 1, b: { c: 3, d: 4, e: 6 }, f: 7 };
        expect(mergeObjects(obj1, obj2)).to.deep.equal(expected);
    });

    it('should merge arrays within the objects', () => {
        const obj1 = { a: [1, 2], b: { c: [3, 4] } };
        const obj2 = { a: [3, 4], b: { c: [5, 6] } };
        const expected = { a: [1, 2, 3, 4], b: { c: [3, 4, 5, 6] } };
        expect(mergeObjects(obj1, obj2)).to.deep.equal(expected);
    });

    it('should handle empty objects', () => {
        const obj1 = {};
        const obj2 = { a: 1, b: 2 };
        expect(mergeObjects(obj1, obj2)).to.deep.equal(obj2);
        expect(mergeObjects(obj2, obj1)).to.deep.equal(obj2);
    });

    it('should handle null input', () => {
        const obj = { a: 1, b: 2 };
        expect(mergeObjects(null, obj)).to.deep.equal(obj);
        expect(mergeObjects(obj, null)).to.deep.equal(obj);
    });
});

describe('checkValueAgainstRegexpArray', () => {
    it('should return false when regexpArray is undefined', () => {
        const result = checkValueAgainstRegexpArray('test');
        assert.strictEqual(result, false);
    });

    it('should return false when value does not match any regular expression', () => {
        const regexpArray = [/\d+/, /[a-z]+/];
        const result = checkValueAgainstRegexpArray('TEST', regexpArray);
        assert.strictEqual(result, false);
    });

    it('should return true when value matches a regular expression', () => {
        const regexpArray = [/\d+/, /[a-z]+/];
        const result = checkValueAgainstRegexpArray('test123', regexpArray);
        assert.strictEqual(result, true);
    });

    it('should return true when value matches multiple regular expressions', () => {
        const regexpArray = [/\d+/, /[a-z]+/, /[!@#$%^&*()_+-={}[\]|\\:;"'<>,.?/]+/];
        const result = checkValueAgainstRegexpArray('test123!@#', regexpArray);
        assert.strictEqual(result, true);
    });
});
