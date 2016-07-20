import babel from 'rollup-plugin-babel';
import npm from 'rollup-plugin-node-resolve';
import cjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  entry: 'index.js',
  format: 'iife',
  dest: 'dist/bundle.js', // equivalent to --output
  treeshake: true,
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    npm({
      jsnext: true,
      main: true
    }),
    cjs({
      include: 'node_modules/**',
      sourceMaps: false
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    })
  ]
};
