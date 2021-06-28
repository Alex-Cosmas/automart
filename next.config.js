module.exports = {
  images: {
    domains: [''],
  },
  future: {
    webpack5: false,
  },
  webpack: function (config, options) {
    config.experiments = {}
    return config
  },
}

// module.exports = {
//   reactStrictMode: true,
// }
