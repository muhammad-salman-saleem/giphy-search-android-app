// module.exports = {
//   root: true,
//   extends: '@react-native',
// };
module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
  ],
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "rules": {
    "react/tsx-uses-react": "error",
    "react/tsx-uses-vars": "error",
    "react/react-in-tsx-scope": "off",
    "no-undef": "off",
    "react/display-name": "off",
    "react/tsx-filename-extension": "off",
    "no-param-reassign": "off",
    "react/prop-types": 1,
    "react/require-default-props": "off",
    "react/no-array-index-key": "off",
    "react/tsx-props-no-spreading": "off",
    "react/forbid-prop-types": "off",
    "import/order": "off",
    "import/no-cycle": "off",
    "no-console": "off",
    "tsx-a11y/anchor-is-valid": "off",
    "prefer-destructuring": "off",
    "no-shadow": "off",
    "import/no-named-as-default": "off",
    "import/no-extraneous-dependencies": "off",
    "tsx-a11y/no-autofocus": "off",
    "no-unused-vars": [
      "error",
      {
        "ignoreRestSiblings": false
      }
    ],
    "prettier/prettier": [
      "warn",
      {
        "bracketSpacing": true,
        "printWidth": 140,
        "singleQuote": true,
        "trailingComma": "none",
        "tabWidth": 2,
        "useTabs": false,
        "endOfLine": "auto"
      }
    ]
  },
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "tsx": true
    },
    "ecmaVersion": 12
  },
  "plugins": ["prettier", "react", "react-hooks", "@typescript-eslint"],
};
