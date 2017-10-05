module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],

    files: [
      { pattern: "src/**/*.ts" },
      { pattern: "tests/**/*.ts" }
    ],

    preprocessors: {
      "src/**/*.ts": ["karma-typescript"],
      "tests/**/*.ts": ["karma-typescript"]
    },

    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
      compilerOptions: {
        module: "commonjs",
        sourceMap: true,
        target: "ES5"
      },
    },

    reporters: ["progress", "karma-typescript"],
    browsers: ["PhantomJS"]
  });
};