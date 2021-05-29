module.exports = {
  preset: 'ts-jest',
  coverageDirectory: './coverage',
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'html', 'text-summary'],
  collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: ['TS151001'],
      },
    },
  },
}
