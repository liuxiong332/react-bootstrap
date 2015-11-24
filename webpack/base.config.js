import webpack from 'webpack';

export default function getBaseConfig(options) {
  const jsLoader = 'babel?cacheDirectory';

  const baseConfig = {
    entry: undefined,

    output: undefined,

    externals: undefined,

    module: {
      loaders: [
        { test: /\.js/, loader: jsLoader, exclude: /node_modules/ },
        { test: /\.scss$/, loaders: ['style-loader', 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]', 'sass'] },
      ]
    },

    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", ".scss", ".css"]
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(options.optimizeMinimize ? 'production' : 'development')
        }
      })
    ]
  };

  if (options.optimizeMinimize) {
    baseConfig.devtool = 'source-map';
  }

  return baseConfig;
}
