import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import typescriptRollupPlugin from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

const externalLibs = ['react', 'react-dom'];

export default {
	input: './src/index.tsx',
	output: {
		file: './dist/bundle.js',
		format: 'amd'
	},
	plugins: [
		replace({
			preventAssignment: true,
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		resolve({
			extensions: ['.jsx', '.js'],
			browser: true
		}),
		commonjs(),
		typescriptRollupPlugin(),
		babel({
			babelHelpers: 'bundled'
		})
	],
	external: id => externalLibs.includes(id)
};
