export default {
    input: 'index.js',
    output: [{
        file: 'dist/maybe.js',
        format: 'iife',
        name: 'Maybe'
    }, {
        file: 'dist/maybe.umd.js',
        format: 'umd',
        name: 'Maybe',
    }, {
        file: 'dist/maybe.cjs.js',
        format: 'cjs',
        name: 'Maybe',
    }, {
        file: 'dist/maybe.amd.js',
        format: 'amd',
        name: 'Maybe',
    }],
}