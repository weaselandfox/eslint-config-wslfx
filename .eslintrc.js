module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'class-methods-use-this': 0,
    'function-paren-newline': 0,
    'import/prefer-default-export': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/no-autofocus': 0,
  },
}
