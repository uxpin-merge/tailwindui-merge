module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/AvatarGroup/AvatarGroup.js',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Example Design System'
};
