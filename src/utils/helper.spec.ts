import { numberWithCommas, getRate, inverseNumber, changeQueryStringToJSON } from './helpers';

test('test numberWithCommas', () => {
  expect(numberWithCommas('100')).toBe('100');
  expect(numberWithCommas('1000')).toBe('1,000');
});

test('test getRate to throw error', () => {
  const errorNotBiggerThanOne = 'input should not be bigger than 1';
  const errorNotSmallerThanZero = 'input should not be smaller than 0';
  expect(() => getRate('1.1')).toThrow(Error(errorNotBiggerThanOne));
  expect(() => getRate('2')).toThrow(Error(errorNotBiggerThanOne));
  expect(() => getRate('0')).toThrow(Error(errorNotSmallerThanZero));
  expect(() => getRate('0.0')).toThrow(Error(errorNotSmallerThanZero));
});

test('test getRate', () => {
  expect(getRate('0.0001')).toBe('10000');
  expect(getRate('0.001')).toBe('1000');
  expect(getRate('0.01')).toBe('100');
  expect(getRate('0.1')).toBe('10');
  expect(getRate('1')).toBe('1');
});

test('test inverseNumber', () => {
  expect(inverseNumber('1')).toBe('1');
  expect(inverseNumber('10')).toBe('0.1');
  expect(inverseNumber('100')).toBe('0.01');
  expect(inverseNumber('1000')).toBe('0.001');
  expect(inverseNumber('10000')).toBe('0.0001');
});

test('test changeQueryStringToJSON', () => {
  expect(changeQueryStringToJSON('a=0&b=text')).toEqual({ a: '0', b: 'text' });
});
