module.exports = {
    env: {
        browser: true,
        es2020: true,
        jest: true,
      },
      extends: ["standard", "prettier"],
      parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
      },
      plugins: ["prettier"],
      rules: {
        "prettier/prettier": "error",
        "jsx-a11y/anchor-is-valid": "off",
        camelcase: "off",
      },
};
