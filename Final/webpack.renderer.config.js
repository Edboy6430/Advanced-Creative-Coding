const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
  test: /\.(png|svg|jpg|jpeg|gif|frag|vert|gltf|json)$/i,
  type: 'asset/resource',
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.json', '.ts', '.jsx', '.tsx', '.css'],
  },
};
