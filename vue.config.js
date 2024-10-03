const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        // Set feature flags based on your requirements
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false', // Disable hydration mismatch details
        // Add other feature flags if needed
      }),
    ],
  },
});
