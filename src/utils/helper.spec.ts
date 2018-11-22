import { changeQueryStringToJSON } from './helpers';

test('test changeQueryStringToJSON', () => {
  expect(changeQueryStringToJSON('a=0&b=text')).toEqual({ a: '0', b: 'text' });
});
