import { resolve } from 'path';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import commonjs from 'rollup-plugin-commonjs';
import rollupResolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve'; 
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';

import { terser } from 'rollup-plugin-terser';

class RollUpConfig {

    constructor(NODE_ENV = 'development') {
        this.NODE_ENV = NODE_ENV;
    }

    get output() {
        return [
            // { file: resolve('dist/bundle_cjs.js'), format: 'cjs' },
            // { file: resolve('dist/bundle_es.js'), format: 'es' },
            { file: resolve('lib/bundle_umd.js'), format: 'umd', name: 'umd', sourcemap: true,}
        ];
    }

    get plugins() {

        const basePlugins = [
            rollupResolve(),
            commonjs(),
            postcss({
                extensions: ['.css', '.less']
            }),
            eslint({
                fix: true,
                throwOnError: true,
                throwOnWarning: true,
                include: resolve('src'),
                exclude: resolve('node_modules')
            }),
            babel({
                exclude: 'node_modules/**',
                runtimeHelpers: true,
            })
        ];
        
        if(this.NODE_ENV === 'production') {
            return [
                ...basePlugins,
                terser(),
            ];
        }
        
        return [
            ...basePlugins,
            serve({  
                open: true,
                port: 4000,
                contentBase: [resolve('public'), resolve('lib')]
            }),
            livereload(resolve('src')),
        ];

    }

    get globals() {
        return {
            axios: 'axios'
        };
    }

    getConfig() {

        const { output, plugins, globals } = this;

        return {
            input: resolve('src/index.js'),
            output,
            plugins,
            globals
        };

    }

}

export default new RollUpConfig(process.env.NODE_ENV).getConfig();