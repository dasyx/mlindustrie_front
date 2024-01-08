module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    "vue/no-unused-vars": "error",
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": "off",
    "vue/no-multiple-template-root": "off",
    indent: "off",
    quotes: "off", // Désactiver la règle des guillemets simples
    "comma-dangle": "off",
    semi: "off",
    "no-extra-spaces": "off",
    "space-infix-ops": "off",
    "space-before-function-paren": "off",
    "no-unused-vars": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-closing-bracket-newline": "off",
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
};
