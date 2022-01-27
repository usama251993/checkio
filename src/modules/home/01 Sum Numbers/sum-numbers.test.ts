import { my } from './sum-numbers.puzzle';

const Tests = [
  { test: 'hi', expected: 0 },
  { test: 'who is 1st here', expected: 0 },
  { test: 'my numbers is 2', expected: 2 },
  {
    test: 'This picture is an oil on canvas '
      + 'painting by Danish artist Anna '
      + 'Petersen between 1845 and 1910 year',
    expected: 3755
  },
  { test: '5 plus 6 is', expected: 11 },
  { test: '', expected: 0 },
  { test: 'It is the natural number following 4 and preceding 6  and is a prime number', expected: 10 }
];

describe('Sum Numbers using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return the correct result for '${test.test}'`, () => {
        expect(my(test.test)).toEqual(test.expected);
      });
    });
  });

  // describe('Best solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return the correct result for ${test.values}`, () => {
  //       expect(best(test.values)).toEqual(test.expected);
  //     });
  //   });
  // });

  // describe('Creative solution', () => {
  //   Tests.forEach(test => {
  //     it(`should return the correct result for ${test.values}`, () => {
  //       expect(creative(test.values)).toEqual(test.expected);
  //     });
  //   });
  // });
});
