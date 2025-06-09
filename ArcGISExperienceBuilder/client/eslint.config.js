const eslint = require('@eslint/js')
const globals = require('globals')
const hooksPlugin = require('eslint-plugin-react-hooks')
// const jsxA11y = require('eslint-plugin-jsx-a11y')
const jimuTheme = require('eslint-plugin-jimu-theme')
const tsEslint = require('typescript-eslint')
const eslintPlugin = require('eslint-plugin-react')
const globalIgnores = require('./eslint-ignore')

const GLOBALS_BROWSER_FIX = Object.assign({}, globals.browser, {
  AudioWorkletGlobalScope: globals.browser['AudioWorkletGlobalScope ']
})
delete GLOBALS_BROWSER_FIX['AudioWorkletGlobalScope ']

module.exports = (async function config() {
  const { default: love } = await import('eslint-config-love')
  const config = [
    eslint.configs.recommended,
    love,
    {
      languageOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        },
        globals: {
          ...GLOBALS_BROWSER_FIX,
          ...globals.jest,
          ...globals.node,
          ...globals.commonjs,
          JSX: true,
          React: true,
          Interact: true,
          fetchMock: true,
          NodeJS: true,
          NodeRequire: true,
          __esri: true,
          __webpack_public_path__: true,
          System: true,
          HTMLArcgisChartsScatterPlotElement: true,
          HTMLArcgisChartsBarChartElement: true,
          HTMLArcgisChartsGaugeElement: true,
          HTMLArcgisChartsHistogramElement: true,
          HTMLArcgisChartsLineChartElement: true,
          HTMLArcgisChartsPieChartElement: true,
          HTMLArcgisArcadeEditorElement: true
        }
      },
      files: ['**/*.ts', '**/*.tsx', '**/*.js'],
      plugins: {
        'react-hooks': hooksPlugin,
        'jimu-theme': jimuTheme,
        "react": eslintPlugin
      },
      rules: {
        'jimu-theme/no-classic-variables': ['warn', { themeAliases: ['theme', 'theme2', 'builderTheme', 'appTheme', 'exbTheme'] }],
        'jimu-theme/no-classic-css-vars': 'warn',
        'jimu-theme/no-classic-css-utilities': 'warn',
        'jimu-theme/no-unnecessary-template-vars': 'warn',
        'jimu-theme/no-classic-variables-left': 'warn',

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',

        "@typescript-eslint/no-inferrable-types": "off",
        "arrow-body-style": "off",
        "class-methods-use-this": "off",
        "@typescript-eslint/class-methods-use-this": "off",
        "prefer-destructuring": "off",
        "@typescript-eslint/prefer-destructuring": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        "@typescript-eslint/use-unknown-in-catch-callback-variable": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "init-declarations": "off",
        "@typescript-eslint/init-declarations": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-enum-comparison": "off",
        "@typescript-eslint/prefer-for-of": "off",
        "@typescript-eslint/no-unsafe-type-assertion": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-unnecessary-condition": 'off',
        "@typescript-eslint/no-loop-func": "off",
        'eslint-comments/require-description': 'off',
        "@typescript-eslint/prefer-regexp-exec": "off",
        "@typescript-eslint/prefer-string-starts-ends-with": "off",
        "no-empty-pattern": "off",
        "@typescript-eslint/unified-signatures": "off",
        "prefer-regex-literals": "off",
        "@typescript-eslint/naming-convention": "warn",
        "react/no-unused-class-component-methods": "warn",
        "@typescript-eslint/no-deprecated": "off",

        //Temporary warning role
        "array-callback-return": "warn",
        "@typescript-eslint/require-await": "warn",

        "max-params": [
          "warn",
          {
            'max': 6
          }
        ],
        "@typescript-eslint/max-params": "off",

        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true,
            'ts-check': false,
            minimumDescriptionLength: 0
          }
        ],
        '@typescript-eslint/no-unused-vars': [
          'off',
          {
            args: 'none',
            caughtErrors: 'none',
            ignoreRestSiblings: true,
            vars: 'all',
            varsIgnorePattern: '^jsx$'
          }
        ],
        "no-unused-vars": ["off", {
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all',
          varsIgnorePattern: '^jsx$'
        }],
        '@typescript-eslint/consistent-indexed-object-style': [
          'error',
          'index-signature'
        ],
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/unbound-method': 'warn',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/prefer-optional-chain': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/require-array-sort-compare': 'off',
        '@typescript-eslint/promise-function-async': 'off',

        'node/handle-callback-err': 'off',
        'node/no-callback-literal': 'off',
        'n/handle-callback-err': 'off',
        'n/no-callback-literal': 'off',

        'no-return-await': 'off',
        'no-case-declarations': 'off',
        'prefer-promise-reject-errors': 'off',
        'prefer-optional-chain': 'off',
        'symbol-description': 'off',
        'no-template-curly-in-string': 'off',
        'spaced-comment': 'off',
        'no-fallthrough': 'off',
        'no-useless-escape': 'off',
        'object-shorthand': 'off',

        // Personal additions
        '@typescript-eslint/array-type': 'off',
        'prefer-const': 'off',
      }
    },
    {
      files: ['**/translations/*.js'],
      languageOptions: {
        globals: {
          System: 'readonly',
          define: 'readonly'
        }
      },
      rules: {
        'camelcase': 'off',
        'max-len': 'off',
        'quote-props': 'off',
        'quotes': 'off',
        '@typescript-eslint/quotes': 'off',
        'no-useless-escape': 'off',
        'semi': 'off',
        '@typescript-eslint/semi': 'off',
        'eol-last': 'off',
        'comma-dangle': 'off',
        'key-spacing': 'off',
        'block-spacing': 'off',
        '@typescript-eslint/block-spacing': 'off',
        'brace-style': 'off',
        '@typescript-eslint/brace-style': 'off',
        'object-curly-newline': 'off',
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': 'off'
      }
    },
    {
      files: ['**/translations/default.ts'],
      rules: {
        'camelcase': 'off',
        'max-len': 'off',
        'quote-props': 'off',
        '@typescript-eslint/quotes': 'off',
        'comma-dangle': 'off',
        'no-useless-escape': 'off'
      }
    },
    {
      files: ['**/translations/**/*.js'],
      linterOptions: {
        reportUnusedDisableDirectives: "off"
      },
      rules: {
        'eslint-comments/no-unlimited-disable': 'off',
        'eslint-comments/no-unused-disable': 'off'
      }
    },
    {
      files: [
        'builder/themes/**/*.{ts,tsx}',
        'builder/widgets/theme-setting/src/runtime/components/theme-setting/**/*.{ts,tsx}',
        'jimu-theme/lib/classic/**/*.{ts,tsx}',
        'jimu-theme/lib/manager/**/*.{ts,tsx}',
        'jimu-theme/lib/system/**/*.{ts,tsx}',
        'jimu-theme/lib/tests/**/*.{ts,tsx}',
        'jimu-theme/lib/utils/**/*.{ts,tsx}',
        'extensions/themes/**/*.{ts,tsx}',
        'jimu-theme/lib/tests/classic/*.{ts,tsx}',
        'storybook/stories/theme/**/*.{ts,tsx}'
      ],
      ignores: ['jimu-theme/lib/manager/components/*.{ts,tsx}', 'jimu-theme/lib/manager/global/mixin/*.{ts,tsx}'],
      rules: {
        'jimu-theme/no-classic-variables': 'off',
        'jimu-theme/no-classic-css-vars': 'off',
        'jimu-theme/no-classic-css-utilities': 'off',
        'jimu-theme/no-unnecessary-template-vars': 'off',
        'jimu-theme/no-classic-variables-left': 'off'
      }
    },
    {
      //Disable ts type-checked linting for js/json files
      ...tsEslint.configs.disableTypeChecked,
      "files": ['**/*.js', '**/*.json'],
    },
    // {
    //   plugins: {
    //     'jsx-a11y': jsxA11y
    //   },
    //   ...jsxA11y.flatConfigs.recommended,
    //   rules: {
    //     ...jsxA11y.configs.recommended.rules,
    //     'jsx-a11y/no-autofocus': 'off',
    //     'jsx-a11y/no-noninteractive-tabindex': 'off',
    //     'jsx-a11y/tabindex-no-positive': 'warn',
    //     // remove the below rules when eslint is done.(default is error)
    //     'jsx-a11y/aria-role': 'off',
    //     'jsx-a11y/aria-props': 'off',
    //     'jsx-a11y/role-supports-aria-props': 'off',
    //     'jsx-a11y/role-has-required-aria-props': 'off',
    //   },
    //   files: ['**/*.ts', '**/*.tsx', '**/*.js'],
    //   languageOptions: {
    //     ...jsxA11y.flatConfigs.recommended.languageOptions,
    //     globals: {
    //       ...globals.serviceworker
    //     }
    //   }
    // },
    {
      ignores: globalIgnores
    }
  ]
  return config
})()
