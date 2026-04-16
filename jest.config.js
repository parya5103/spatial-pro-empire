module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  moduleNameMapper: {'^@/(.*)$': '<rootDir>/$1'},
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: ['app/**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**', '!**/.next/**'],
};