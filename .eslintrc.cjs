module.exports = {
  extends: ['react-app'],
  rules: {
    // Ignore source-map-loader warnings for TensorFlow packages
    'source-map-loader/no-missing-source-map': 'off'
  },
  ignorePatterns: [
    'node_modules/**',
    'build/**'
  ]
};
