const { resolve } = require('path');
const babel = require('rollup-plugin-babel');
const { eslint } = require('rollup-plugin-eslint');
const commonjs = require('rollup-plugin-commonjs');
const rollupResolve = require('rollup-plugin-node-resolve');
const serve = require('rollup-plugin-serve'); 
const livereload = require('rollup-plugin-livereload');
// const { terser } require('rollup-plugin-terser');

class RollUpConfig {

    constructor(NODE_ENV = 'development') {
        this.NODE_ENV = NODE_ENV;
    }

    get output() {
        return [
            { file: resolve('dist/bundle_cjs.js'), format: 'cjs' },
            { file: resolve('dist/bundle_es.js'), format: 'es' },
            { file: resolve('dist/bundle_umd.js'), format: 'umd', name: 'test'}
        ];
    }

    get plugins() {

        const basePlugins = [
            rollupResolve(),
            commonjs(),
            eslint({
                throwOnError: true,
                throwOnWarning: true,
                include: ['src/**'],
                exclude: ['node_modules/**']
            }),
            babel({
                exclude: 'node_modules/**',
                runtimeHelpers: true,
            }),
        ];
        
        if(this.NODE_ENV === 'production') {
            return basePlugins;
        }
        
        return [
            ...basePlugins,
            serve({  
                open: true,
                port: 4000,
                contentBase: [resolve('public'), resolve('dist')]
            }),
            livereload(resolve('src')),
        ];

    }

    get globals() {
        return {
            lodash: '_'
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