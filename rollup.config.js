import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/svelte-bulma.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    svelte({
      include: 'src/**/*.html'
    }),
    buble(),
    uglify()
  ]
}
