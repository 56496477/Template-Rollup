import { resolve } from 'path';
import { babel } from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
class RollUpConfig {
    constructor(NODE_ENV = 'development') {
        this.NODE_ENV = NODE_ENV;
    }

    get output() {
        return [
            // { file: resolve('dist/bundle_cjs.js'), format: 'cjs' },
            { file: resolve('dist/index.js'), format: 'esm' },  
            // {
            //     file: resolve('lib/bundle_umd.js'),
            //     format: 'umd',
            //     name: 'umd',
            //     sourcemap: true,
            // },
        ];
    }

    get plugins() {
        const basePlugins = [
            nodeResolve(),
            commonjs(),
            postcss({
                extensions: ['.css', '.less'],
            }),
            eslint({
                fix: true,
                throwOnError: true,
                throwOnWarning: true,
                include: resolve('src'),
                exclude: resolve('node_modules'),
            }),
            babel({ babelHelpers: 'bundled' }),
            typescript({
                tsconfig: resolve('tsconfig.json'),
            })
        ];

        if (this.NODE_ENV === 'production') {
            return [...basePlugins, terser()];
        }

        return [
            ...basePlugins,
            serve({
                open: true,
                port: 4001,
                contentBase: [resolve('public'), resolve('lib')],
            }),
            livereload(resolve('src')),
        ];
    }

    get globals() {
        return {
            axios: 'axios',
        };
    }

    get input() {
        return resolve('src/index.ts');
    }

    getConfig() {
        const { output, plugins, globals, input } = this;

        return {
            input,
            output,
            plugins,
            globals,
        };
    }
}

export default new RollUpConfig(process.env.NODE_ENV).getConfig();
