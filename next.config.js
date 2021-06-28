module.exports = {
  images: {
    // domains: ['https://autotraderau-res.cloudinary.com'],
    domains: ['assets.example.com'],
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
