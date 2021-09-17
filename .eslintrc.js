module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier-vue/recommended',
    'prettier',
  ],
  settings: {
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        template: false,
        script: true,
        style: true,
      },

      usePrettierrc: true,

      fileInfoOptions: {
        // Process the files in `node_modules` or not (default: `false`)
        withNodeModules: false,
      },
    },
  },
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    camelcase: 'warn',
    'linebreak-style': ['warn', 'unix'],
    'prettier-vue/prettier': 'warn',
    'vue/order-in-components': 'warn',
    'vue/attributes-order': 'warn',
  },
}
