const presets = [
    [
        '@babel/preset-env',
        {
            'modules': false
        }
    ]
];

const plugins = [
    [
        '@babel/plugin-transform-runtime',
        // {
        //     corejs: 2
        // }
    ]
];

module.exports = {
    presets,
    plugins
};
