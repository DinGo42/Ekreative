module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "next/core-web-vitals",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{cjs,js}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "react", "prettier", "naming-convention"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "react/display-name": "off",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "prettier/prettier": "error",

    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["objectLiteralProperty"],
        format: ["camelCase"],
      },
      {
        selector: ["enum", "typeLike", "interface"],
        format: ["PascalCase"],
      },
      {
        selector: "variableLike",
        format: ["PascalCase", "camelCase"],
      },
    ],
    "new-cap": ["error", { newIsCap: true, capIsNew: false }],
    ignoreTranspilerName: "off",
  },
};
