module.exports = {
  moduleFileExtensions: ['js'],
  transform: {
    '\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  testMatch: ['**/*.(test).(js)'],
  coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js'],
  setupFilesAfterEnv: ['<rootDir>/enzyme.js'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
};
