// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//IsPhoneNumber
test('Testing if Phone Number is Valid - True 1', () => {
    expect(functions.isPhoneNumber('619-444-4444')).toBe(true);
});

test('Testing if Phone Number is Valid - True 2', () => {
    expect(functions.isPhoneNumber('858-555-5555')).toBe(true);
});

test('Testing if Phone Number is Valid - False 1', () => {
    expect(functions.isPhoneNumber('chocolate')).toBe(false);
});

test('Testing if Phone Number is Valid - False 2', () => {
    expect(functions.isPhoneNumber('5555')).toBe(false);
});


//isEmail
test('Testing if Email is Valid - True 1', () => {
    expect(functions.isEmail('dog@gmail.com')).toBe(true);
});

test('Testing if Email is Valid - True 2', () => {
    expect(functions.isEmail('cat@gmail.com')).toBe(true);
});

test('Testing if Email is Valid - False 1', () => {
    expect(functions.isEmail('11111111111')).toBe(false);
});

test('Testing if Email is Valid - False 2', () => {
    expect(functions.isEmail('chocolate')).toBe(false);
});

//isStrongPassword

test('Testing if Password is Strong - True 1', () => {
    expect(functions.isStrongPassword('d12345')).toBe(true);
});

test('Testing if Password is Strong - True 2', () => {
    expect(functions.isStrongPassword('t45679')).toBe(true);
});

test('Testing if Password is Strong - False 1', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});

test('Testing if Password is Strong - False 2', () => {
    expect(functions.isStrongPassword('1abcd')).toBe(false);
});

//isDate

test('Testing if Date is Valid - True 1', () => {
    expect(functions.isDate('10/29/2021')).toBe(true);
});

test('Testing if Date is Valid - True 2', () => {
    expect(functions.isDate('1/1/2001')).toBe(true);
});

test('Testing if Date is Valid - False 1', () => {
    expect(functions.isDate('9999/9999/9999999')).toBe(false);
});

test('Testing if Date is Valid - False 2', () => {
    expect(functions.isDate('1/1/1')).toBe(false);
});

//isHexColor

test('Testing if HexColor is Valid - True 1', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('Testing if HexColor is Valid - True 2', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('Testing if HexColor is Valid - False 1', () => {
    expect(functions.isHexColor('djdjdjdjadj')).toBe(false);
});

test('Testing if HexColor is Valid - False 2', () => {
    expect(functions.isHexColor('#AAAAAAAAAAAAAAAA')).toBe(false);
});