const typescript = require('@rollup/plugin-typescript')
const { terser } = require('rollup-plugin-terser')

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: './dist/workfront-cookie.js',
        format: 'umd',
        name: 'WorkfrontCookie',
        sourcemap: true,
      },
    ],
    plugins: [typescript()],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: './dist/workfront-cookie.min.js',
        format: 'umd',
        name: 'WorkfrontCookie',
        sourcemap: true,
      },
    ],
    plugins: [typescript(), terser()],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: './dist/workfront-cookie.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        module: 'es6',
      }),
    ],
  },
]
