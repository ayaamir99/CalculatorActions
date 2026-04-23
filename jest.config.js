// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',          // or 'node' for Puppeteer/Playwright
  setupFilesAfterFramework: ['@testing-library/jest-dom'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: ['**/__tests__/**/*.test.js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
};
