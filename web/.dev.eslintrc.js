module.exports = {
  env: {
    browser: true,
    es2021: true, commonjs: true, node: true
  },
  plugins: ["react"],
  settings: { react: { version: "detect" } },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    quotes: "error"
  },
};
