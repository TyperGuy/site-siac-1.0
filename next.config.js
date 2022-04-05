const withImages = require('next-images')
module.exports = {
  reactStrictMode: true,
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  images: {
    disableStaticImages: true
  },
  ...(withImages({
    esModule: true
   }))
}

 