module.exports = {
  preset: 'ts-jest',
  coverageDirectory: './coverage',
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'html', 'text-summary'],
  collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
}
