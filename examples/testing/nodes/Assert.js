const _ = require('lodash');
const assert = require('assert');
const castFunction = require('@cocoon/util/castFunction').default;

module.exports.Assert = {
  category: 'Data',

  description: `Asserts one or more conditions.`,

  in: {
    data: {
      description: `The data to test against.`,
    },
    tests: {
      description: `The test conditions to check.`,
      required: true,
    },
  },

  out: {
    data: {
      description: `The unmodified input data.`,
    },
  },

  async *process(context) {
    const { data, tests } = context.ports.read();

    Object.keys(tests).forEach(key => {
      try {
        castFunction(tests[key])(assert, data);
      } catch (error) {
        const message = `Test "${key}" failed: ${error.message}`;
        context.debug(message, error);
        throw new Error(message);
      }
    });

    context.ports.write({ data });

    const numTests = Object.keys(tests).length;
    return numTests > 1 ? `${numTests} tests passed 👍` : `Test passed 👍`;
  },
};
