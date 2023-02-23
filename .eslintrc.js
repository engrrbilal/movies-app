module.exports = {
  root: true,
  plugins: ["jest"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: true,
      configFile: false,
      // your babel options
      presets: ["@babel/preset-env"],
    },
  },
  rules: {
    'no-use-before-define': 0,
    'react-hooks/exhaustive-deps': 0,
    'keyword-spacing': [2, { before: true, after: true }],
    'no-nested-ternary': 1,
    'react/no-multi-comp': 0,
    'react/no-render-return-value': 0,
    'no-shadow': 0,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-const' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
    ],
    'prefer-destructuring': ['error', {
      array: true,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    }],
  },
};
