module.exports = {
    env: {
      browser: true,
      es6: true
    },
    extends: ["airbnb", "prettier", "prettier/react"],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
      __DEV__: 'readonly'
    },
    parser: "babel-eslint",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: "module"
    },
    plugins: ["react", "prettier"],
    rules: {
      "prettier/prettier": "error",
      "camelcase": "off",
      "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
      "import/prefer-default-export": "off",
      "import/no-cycle":"off",
      "react/prop-types": "off",
      "react/jsx-props-no-spreading": "off",
      "no-param-reassign": "off",
      "no-console": ["error", { allow: ["tron"] }]
    }
  }