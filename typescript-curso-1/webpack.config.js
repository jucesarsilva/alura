const path = require('path');

module.exports = {
  entry: './app/app.ts',
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@controllers': path.resolve(__dirname, 'app/controllers/'),
      '@models': path.resolve(__dirname, 'app/models/'),
      '@views': path.resolve(__dirname, 'app/views/'),
    }
  },
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    open: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3002,
  },
}