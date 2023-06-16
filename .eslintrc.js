module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-console': 'off',
    'no-alert': 'off',
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
    'no-tabs': 'off',
    'max-len': ['error', { code: 100 }],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['index', 'sibling', 'parent', 'internal', 'object', 'type'],
        ],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': [
      'error',
      { namedComponents: ['function-declaration', 'arrow-function'] },
    ], // 함수용 컴포넌트 정의 방식
    'react/jsx-props-no-spreading': 'warn', // props를 펼침연산자(spread operator)를 쓰는 것 제한
    'react/require-default-props': 'off', //  default props 설정해줘야 하는 것 제거
    'react/no-array-index-key': 'warn', // 배열안에서 index 값을 keys 로 쓰는 것을 제한
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/ban-types': 'warn', // 직접적으로 type 을 {} 로 주는 것을 제한
    '@typescript-eslint/indent': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off', // class 설계시 this 사용 관련
    'arrow-body-style': 'warn', // arrow function body 스타일 관련
    'implicit-arrow-linebreak': 'warn',
    'operator-linebreak': 'warn',
  },
}
