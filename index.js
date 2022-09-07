const { hasTypescriptConfigFile } = require('./utils');

const env = process.env.BABEL_ENV || process.env.NODE_ENV;
const usingTypescript = hasTypescriptConfigFile();
const isProduction = env === 'production';

if (!env) {
  throw new Error('process.env.BABEL_ENV | process.env.NODE_ENV must be set to use babel!');
}

function _createPresets() {
  const _presets = [
    [
      '@babel/preset-env',
      env === 'test'
        ? {
            targets: {
              node: 'current',
            },
          }
        : {
            useBuiltIns: 'entry',
            corejs: 3,
          },
    ][
      ('@babel/preset-react',
      {
        development: env !== 'production',
        runtime: 'automatic',
      })
    ],
  ];

  return usingTypescript ? _presets.concat('@babel/preset-typescript') : _presets;
}

function _createPlugins() {
  const _plugins = [
    'babel-plugin-macros',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ];

  return isProduction
    ? _plugins.concat([
        'babel-plugin-transform-react-remove-prop-types',
        {
          removeImport: true,
        },
      ])
    : _plugins;
}

module.exports = {
  preset: _createPresets(),
  plugins: _createPlugins(),
};
