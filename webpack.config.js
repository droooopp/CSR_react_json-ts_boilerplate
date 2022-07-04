const path = require('path')
const devcert = require('devcert')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = async (env, { mode }) => {
  const isDevelopment = mode === 'development'
  const { key, cert } = await devcert.certificateFor('localhost')

  return {
    mode: mode,
    entry: './src/main.tsx',
    output: {
      filename: `main.js`,
      path: path.resolve(`./dist/common/js/CSR_react_json-ts_boilerplate@${process.env.npm_package_version}`),
      publicPath: `/common/js/CSR_react_json-ts_boilerplate@${process.env.npm_package_version}/`
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            fix: true
          }
        },
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.svg/,
          type: 'asset/inline'
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      https: {
        key,
        cert
      }
    },
    devtool: isDevelopment ? 'source-map' : false,
    optimization: {
      minimizer: isDevelopment ? [] : [
        new TerserPlugin({
          terserOptions: {
            compress: {
              pure_funcs: [
                'console.debug',
                'console.log'
              ]
            }
          }
        })
      ]
    },
    plugins: [
      // new BundleAnalyzerPlugin()
    ]
  }
}
