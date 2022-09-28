module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        'babel-plugin-transform-typescript-metadata',
        'babel-plugin-parameter-decorator',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        'react-native-reanimated/plugin'
    ],
    env: {
        production: {
            plugins: ['react-native-paper/babel']
        }
    }
};
