const { join } = require('path')
const { when } = require('@craco/craco')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const paths = {
  root: __dirname,
  src: join(__dirname, 'src')
}

const alias = {
  src: paths.src,
  assets: join(paths.src, 'assets'),
  contexts: join(paths.src, 'contexts'),
  components: join(paths.src, 'components'),
  config: join(paths.src, 'config'),
  layouts: join(paths.src, 'layouts'),
  pages: join(paths.src, 'pages'),
  services: join(paths.src, 'services'),
  theme: join(paths.src, 'theme'),
  utils: join(paths.src, 'utils')
}

module.exports = {
  eslint: {
    configure: {
      extends: [
        'react-app',
        'standard',
        'standard-react'
      ]
    }
  },
  webpack: {
    alias,
    plugins: [
      ...when(
        Boolean(process.env.ANALYZE),
        () => [new BundleAnalyzerPlugin()], []
      )
    ]
  }
}
