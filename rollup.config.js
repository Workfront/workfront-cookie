import rollupTypescript from 'rollup-plugin-typescript'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: './dist/workfront-cookie.js',
      format: 'umd',
      name: 'WorkfrontCookie',
      sourcemap: true
    },
    {
      file: './dist/workfront-cookie.esm.js',
      format: 'esm'
    }
  ],
  plugins: [rollupTypescript()]
}
