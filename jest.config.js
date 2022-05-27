/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  collectCoverage: true,
  coverageReporters: ['clover', 'json', 'lcov', ['text']],
  modulePaths: ['<rootDir>/src/'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
};

