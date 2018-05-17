import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import { minify } from 'uglify-es';
import license from 'rollup-plugin-license';
import path from 'path';

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/majores-map-widget.js',
    format: 'iife',
    sourcemap: true,
  },
  name: 'MajoresMapWidget',
  plugins: [
    filesize(),
    eslint(),
    resolve({
      jsnext: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify({}, minify),
    license({
      banner: {
        file: path.join(__dirname, 'LICENSE')
      },
    }),
  ],
  external: [ 'echarts', ],
  globals: {
    echarts: 'echarts',
  },
};
