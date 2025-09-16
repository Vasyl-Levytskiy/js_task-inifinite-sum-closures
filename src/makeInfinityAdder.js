'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder() {
    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    [].slice.call(arguments).forEach((num) => {
      sum += num;
    });

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
