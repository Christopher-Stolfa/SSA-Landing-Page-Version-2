/**
 * Storybook configuration
 */
module.exports = {
  addons: ["@storybook/addon-essentials", "@storybook/addon-postcss"],
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.@(js|mdx)"],
  features: {
    storyStoreV7: true,
  },
};
