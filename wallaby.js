module.exports = () => {
  return {
    files: ["components/**/index.js"],
    tests: ["components/**/tests.js"],
    testFramework: "mocha",
    env: {
      type: "node",
      params: {
        runner: `-r ${require.resolve("esm")} -r ${require.resolve(
          "jsdom-global/register"
        )}`
      }
    }
  };
};
