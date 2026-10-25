import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import esbuild from 'rollup-plugin-esbuild';

const plugins = [
  nodeResolve(),
  esbuild({
    target: 'es2021',
    tsconfig: 'tsconfig.json',
    loaders: {
      '.ts': 'ts',
    },
  }),
  json(),
  babel({
    babelHelpers: 'bundled',
    presets: ['@babel/preset-env'],
  }),
  terser()
];

export default [
  {
    input: 'src/alarmo-card.ts',
    output: {
      dir: 'dist',
      format: 'iife',
      sourcemap: false,
      name: 'AlarmoCard'
    },
    plugins: [...plugins],
    context: 'window'
  },
];
