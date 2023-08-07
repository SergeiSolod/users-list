module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    '^@src/(.*)$': '<rootDir>/src',
  },
  collectCoverageFrom: ['<rootDir>/**/*.{ts, tsx}'],
  roots: ['<rootDir>'],
  testRegex: '(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/utils/svgTransform.js',
  },
};
