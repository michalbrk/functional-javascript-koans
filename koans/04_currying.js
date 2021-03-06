describe("Currying", () => {
  describe("Implement curry function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // curry :: (* → a) → (* → a)
      function curry(fn) {
          return function r(...args) {
              if(args.length >= fn.length) {
                  return fn(...args);
              }
              return (...f) => r(...args, ...f);
          }
      }

    /***************************************************************/

    test("curried function returns a function after applying a first argument", () => {
      const sum = (a, b) => a + b;
      const curriedSum = curry(sum);
      expect(typeof curriedSum(sum)).toEqual("function");
    });

    test("curried function returns correct result after applying all arguments", () => {
      const sum = (a, b) => a + b;
      const curriedSum = curry(sum);
      expect(curriedSum(2)(3)).toEqual(5);
    });

    // BONUS:
    //
    // HINT: Function.prototype.length specifies function arity
    //
    // test("curried function's arguments can be applied within a first call", () => {
    //   const sum = (a, b) => a + b;
    //   const curriedSum = curry(sum);
    //   expect(curriedSum(2, 3)).toEqual(5);
    // });
  });
});
